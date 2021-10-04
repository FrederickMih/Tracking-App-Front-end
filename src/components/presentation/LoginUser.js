import { useDispatch } from 'react-redux';
import loginAction from '../../actions/login';

const LoginUser = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const username = document.getElementById('username').value;
    if (username !== '') {
      dispatch(
        loginAction({
          username,
          isLogIn: true,
        })
      );
    } else {
      alert('Username can not be empty');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <h1>Login Here</h1>
        <input id="username" type="name" placeholder=" Your Name" />
        <input id="email" type="email" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginUser;
