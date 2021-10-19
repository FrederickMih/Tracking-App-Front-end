import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProgressItem from '../../components/presentation/ProgressItem';
import store from '../../reducers/index';

afterEach(cleanup);

it(' should the displays ProgressItem', () => {
  render(
    <Provider store={store}>
      <ProgressItem
        id="007321"
        date="2021-07-21T11:43:45.134Z"
        data="2.8"
        key="007321"
      />
    </Provider>
  );
  expect(screen.getByText('July 21, 2021')).toBeTruthy();
});
