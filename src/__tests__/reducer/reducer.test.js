import { cleanup } from '@testing-library/react';
import store from '../../reducers/index';

afterEach(cleanup);


it('should return initial state for user', () => {
  expect(store.getState().user).toBeInstanceOf(Object);
});

it('should return initial state for measurements', () => {
  expect(store.getState().measurements).toBeInstanceOf(Object);
});

