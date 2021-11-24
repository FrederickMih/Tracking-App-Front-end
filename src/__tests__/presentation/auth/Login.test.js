import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureAppStore from '../../../Redux/configureStore';
import Login from '../../../components/presentation/auth/Login';

const store = configureAppStore();

describe('Login', () => {
  it('should match the snapshot of Login component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
