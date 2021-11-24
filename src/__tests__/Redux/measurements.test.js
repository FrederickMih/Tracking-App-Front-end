import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureAppStore from '../../Redux/configureStore';
import {
  getMeasurements,
  loadMeasurements,
} from '../../Redux/slicers/measurement';

describe('measurementSlice', () => {
  describe('loading measurements', () => {
    let mockAxios;
    let store;

    beforeEach(() => {
      mockAxios = new MockAdapter(axios);
      store = configureAppStore();
    });

    const measurementSlice = () => store.getState().measurement;

    const measurements = {
      measurements: [
        {
          id: 1,
          measurement_name: 'meaOne',
        },
        {
          id: 1,
          measurement_name: 'meaOne',
        },
        {
          id: 1,
          measurement_name: 'meaOne',
        },
      ],
    };

    describe('Load measurement', () => {
      it('should return all the measurements in an array', async () => {
        mockAxios.onGet('/measurements').reply(200, measurements);

        await store.dispatch(loadMeasurements());

        expect(measurementSlice().measurements.measurements).toHaveLength(3);
      });

      it('should not return any measurement if there is an internal server error', async () => {
        mockAxios.onGet('/measurements').reply(500);

        await store.dispatch(loadMeasurements());

        expect(measurementSlice().measurements).toMatchObject({});
      });
    });

    describe('loading measurements', () => {
      it('should return the boolean TRUE while still loading measurements', () => {
        mockAxios.onGet('/measurements').reply(() => {
          expect(measurementSlice().loading).toBe(true);
          return [200, measurements];
        });
        store.dispatch(loadMeasurements());
      });

      it('should return FALSE after measurements are successfully loaded', async () => {
        mockAxios.onGet('/measurements').reply(200, measurements);

        await store.dispatch(loadMeasurements());

        expect(measurementSlice().loading).toBe(false);
      });

      it('should equally return FALSE if there is an internal server error', async () => {
        mockAxios.onGet('/measurements').reply(500);

        await store.dispatch(loadMeasurements());

        expect(measurementSlice().loading).toBe(false);
      });
    });
  });

  describe('selector', () => {
    const createState = () => ({
      measurement: {
        measurements: [],
        loading: false,
      },
    });

    let state;

    beforeEach(() => {
      state = createState();
    });

    describe('getMeasurements', () => {
      it('should return all the measurements available in store ', () => {
        state.measurement.measurements = [
          { id: 1, measurement_name: 'meaOne' },
          { id: 2, measurement_name: 'meaTwo' },
        ];

        const result = getMeasurements(state);

        expect(result).toHaveLength(2);
      });
    });
  });
});
