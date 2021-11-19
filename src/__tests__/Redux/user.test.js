import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureAppStore from '../../Redux/configureStore';
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  getUserLoadingStatus,
} from '../../Redux/slicers/user'

describe('Login an existing user', () => {
  let mockAxios;
  let store;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = configureAppStore();
  });

  const userSlice = () => store.getState().user;

  const signUp = {
    user: {
      username: 'fred',
      password: '12345',
      password_confirmation: '12345',
    },
  };

  const signUpResponse = {
    status: 200,
    logged_in: true,
    username: 'fred',
  };

  describe('Sign Up a new user', () => {
    describe('registerUser', () => {
      it('should return the created user on successful registration', async () => {
        mockAxios.onPost('/registrations').reply(200, signUpResponse);

        await store.dispatch(registerUser(signUp));

        expect(userSlice().info.status).toBe(200);
      });

      it('should NOT create the user if server detect invalidated credentials', async () => {
        mockAxios.onPost('/registrations').reply(500);

        await store.dispatch(registerUser(signUp));

        expect(userSlice().info).toMatchObject({});
      });
    });
  });

  describe('Existing user login', () => {
    const loginCredentials = {
      user: {
        username: 'fred',
        password: '12345',
      },
    };

    const loginResponse = {
      status: 200,
      logged_in: true,
      username: 'fred',
    };

    describe('loginUser', () => {
      it('should return login information on successful login', async () => {
        mockAxios.onPost('/sessions').reply(200, loginResponse);

        await store.dispatch(loginUser(loginCredentials));

        expect(userSlice().info.status).toBe(200);
      });

      it('should NOT login if there is an internal server error', async () => {
        mockAxios.onPost('/sessions').reply(500);

        await store.dispatch(loginUser(loginCredentials));

        expect(userSlice().info).toMatchObject({});
      });
    });

    describe('Logout action', () => {
      it('should logout the current user with status code 200', async () => {
        mockAxios
          .onDelete('/sessions')
          .reply(200, { status: 200, logged_in: false });

        await store.dispatch(logoutUser());

        expect(userSlice().info.status).toBe(200);
        expect(userSlice().info.logged_in).toBeFalsy();
      });

      it('should NOT logout the user if there is an internal sever error', async () => {
        mockAxios.onDelete('/logout').reply(500);

        await store.dispatch(logoutUser());

        expect(userSlice().info).toMatchObject({});
      });
    });
  });

  describe('loading user', () => {
    it('should return true while creating new user', () => {
      mockAxios.onPost('/registrations').reply(() => {
        expect(userSlice().loading).toBe(true);
        return [200, signUpResponse];
      });
      store.dispatch(registerUser(signUp));
    });
  });

  describe('selectors', () => {
    const createState = () => ({
      user: {
        info: {},
        loading: false,
      },
    });

    let state;

    beforeEach(() => {
      state = createState();
    });

    describe('getUserLoadingStatus', () => {
      it('return TRUE if loading state is true', () => {
        state.user.loading = true;
        const result = getUserLoadingStatus(state);
        expect(result).toBeTruthy();
      });
      it('return FALSE if loading state is true', () => {
        const result = getUserLoadingStatus(state);
        expect(result).toBeFalsy();
      });
    });
  });
});
