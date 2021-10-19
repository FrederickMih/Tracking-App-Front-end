import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../../components/container/App';
import store from '../../reducers/index';

afterEach(cleanup);

it('should render the App component snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(
    asFragment(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toMatchSnapshot();
});

it('Displays username field', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByPlaceholderText(/Username/i);
  expect(element).toBeInTheDocument();
});

it('Displays Email field', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = screen.getByPlaceholderText(/Email/i);
  expect(element).toBeInTheDocument();
});
