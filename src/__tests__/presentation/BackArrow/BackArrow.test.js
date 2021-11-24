import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureAppStore from '../../../Redux/configureStore';
import BackArrow from '../../../components/presentation/BackArrow';

const store = configureAppStore();

describe('BackArrow', () => {
  test('should match the snapshot of BackArrow', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <BackArrow title="bkbar" />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
