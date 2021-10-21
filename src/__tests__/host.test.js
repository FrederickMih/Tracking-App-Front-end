import axios from 'axios';

describe('Host', () => {
  it('should test if Measurement data is posted', async () => {
    const payload = {
      measurement: {
        id: 1,
      },
      measure: {
        value: 0.5,
      },
    };
    const data = await axios
      .post('https://guarded-sands-43543.herokuapp.com/measurements', payload)
      .then((res) => res);

    expect(data).toBeInstanceOf(Object);
  });
});
