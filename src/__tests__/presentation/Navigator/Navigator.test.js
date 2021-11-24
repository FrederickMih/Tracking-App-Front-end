import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureAppStore from '../../../Redux/configureStore';
import Navigator from '../../../components/container/Navigator';

const store = configureAppStore();

describe('Navbar', () => {
  it('should match the snapshot of Navbar Navigator', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
