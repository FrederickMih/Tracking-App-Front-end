import React from 'react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import ProgressItem from '../../components/presentation/ProgressItem';
import store from '../../reducers/index';

afterEach(cleanup);

it('displays ProgressItem', () => {
  render(
    <Provider store={store}>
      <ProgressItem
        id="00434"
        date="2021-07-21T11:43:45.134Z"
        data="25.6"
        key="00434"
      />
    </Provider>
  );
  expect(screen.getByText('July 21, 2021')).toBeTruthy();
});
