import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddMeasure from '../../../components/presentation/AddMeasure';
import configureAppStore from '../../../Redux/configureStore';

const store = configureAppStore();

describe('AddMeasure', () => {
  test('should match the snapshot of AddMeasure component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <AddMeasure />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
