import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureAppStore from '../../Redux/configureStore';
import {
  createMeasure,
  getAllMeasures,
  getProgressReport,
  getTotalData,
  loadMeasures,
} from '../../Redux/slicers/measure';

describe('measureSlice', () => {
  describe('Creating measures and Loading measures', () => {
    let SomeAxios;
    let store;

    beforeEach(() => {
      SomeAxios = new MockAdapter(axios);
      store = configureAppStore();
    });

    const measureSlice = () => store.getState().measure;

    describe('create measures', () => {
      const newMeasure = {
        measurement_id: 1,
        data: 4000,
      };

      const measureSuccess = {
        measure: {
          measurement_id: 1,
          data: 4000,
        },
      };
      const url = 'measurements/1/measures';
      describe('createMeasure', () => {
        it('should create a new measure successfully', async () => {
          SomeAxios.onPost(url).reply(200, measureSuccess);

          expect(measureSlice().newMeasure).toMatchObject([]);
          await store.dispatch(createMeasure(newMeasure));
          expect(measureSlice().newMeasure).toMatchObject({
            measure: { measurement_id: 1, data: 4000 },
          });
        });

        it('should NOT create measure if error occurred', async () => {
          SomeAxios.onPost(url).reply(500);

          await store.dispatch(createMeasure(newMeasure));

          expect(measureSlice().newMeasure).toMatchObject([]);
        });
      });

      describe('loading return value', () => {
        it('should return true while creating new measure', async () => {
          SomeAxios.onPost(url).reply(() => {
            expect(measureSlice().loading).toBe(true);
            return [200, measureSuccess];
          });
          await store.dispatch(createMeasure(newMeasure));
        });

        it('should be false after creating new measure', async () => {
          SomeAxios.onPost(url).reply(200, measureSuccess);

          await store.dispatch(createMeasure(newMeasure));

          expect(measureSlice().loading).toBe(false);
        });

        it('should return false if there is an internal server error', async () => {
          SomeAxios.onPost(url).reply(500);

          await store.dispatch(createMeasure(newMeasure));

          expect(measureSlice().loading).toBe(false);
        });
      });
    });

    describe('loading measures', () => {
      const measures = {
        all: {
          '2021-11-17': [{ id: 1, measurement_id: 1, data: 20 }],
          '2021-11-18': [{ id: 2, measurement_id: 4, data: 20 }],
        },
        progress: {
          sum_data: 4000,
          items: {
            Fire: [{ id: 2, measurement_id: 4, data: 20 }],
          },
        },
      };

      describe('loadMeasures', () => {
        it('should fetch all the measures information', async () => {
          SomeAxios.onGet('/measures').reply(200, measures);

          await store.dispatch(loadMeasures());

          expect(measureSlice().measures.all['2021-11-17'][0].data).toBe(20);
          expect(measureSlice().measures.progress.sum_data).toBe(4000);
        });

        it('should NOT return measure information when network error detected', async () => {
          SomeAxios.onGet('/measures').reply(500);

          await store.dispatch(loadMeasures());

          expect(measureSlice().measures).toMatchObject({});
        });
      });

      describe('loading return value', () => {
        it('should return true while fetching measures', () => {
          SomeAxios.onGet('/measures').reply(() => {
            expect(measureSlice().loading).toBe(true);
            return [200, measures];
          });
          store.dispatch(loadMeasures());
        });

        it('should return false after fetching measures successfully', async () => {
          SomeAxios.onGet('/measures').reply(200, measures);

          await store.dispatch(loadMeasures());

          expect(measureSlice().loading).toBe(false);
        });

        it('should be false if server error detected', async () => {
          SomeAxios.onGet('/measures').reply(500);

          await store.dispatch(loadMeasures());

          expect(measureSlice().loading).toBe(false);
        });
      });
    });
  });

  describe('selectors', () => {
    const createState = () => ({
      measure: {
          measures: {},
          newMeasure: [],
        loading: false,
      },
    });

    let state;

    beforeEach(() => {
      state = createState();
    });

    describe('getAllMeasures', () => {
      it('should return all the measures information if fetched successfully', () => {
        state.measure.measures.all = {
          '2021-11-17': [{ id: 1, measurement_id: 1, data: 20 }],
          '2021-11-18': [{ id: 2, measurement_id: 4, data: 20 }],
        };
        const result = getAllMeasures(state);

        expect(result['2021-11-18']).toHaveLength(1);
      });

      it('should return 0 if the measures > all are not found', () => {
        state.measure.measures = [];

        const result = getAllMeasures(state);

        expect(result).toBe(0);
      });
    });

    describe('getTotalData', () => {
      it('should return sum of data of all the measure if progress object present', () => {
        state.measure.measures.progress = { sum_data: 4000 };

        const result = getTotalData(state);

        expect(result).toBe(4000);
      });

      it('should return 0 if progress data is not available', () => {
        state.measure.measures = [];

        const result = getTotalData(state);

        expect(result).toBe(0);
      });
    });

    describe('getProgressReport', () => {
      it('should return all the measure items within progress if available', () => {
        state.measure.measures.progress = {
          items: {
            Fire: [{ id: 2, measurement_id: 4, data: 2000 }],
          },
        };

        const result = getProgressReport(state);

        expect(Object.keys(result)).toEqual(['Fire']);
      });

      it('should return 0 if items data is not present', () => {
        state.measure.measures = [];

        const result = getProgressReport(state);

        expect(result).toBe(0);
      });
    });
  });
});
