import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../reducers/index';
import MeasurementItem from '../../components/presentation/MeasurementItem';

afterEach(cleanup);

it('should displays MeasurementItem', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MeasurementItem id="007321" name="TestMeasurementItem" key="007321" />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText('TestMeasurementItem')).toBeTruthy();
});
