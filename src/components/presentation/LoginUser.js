import { useDispatch } from 'react-redux';
import { useState } from 'react';
import loginAction from '../../actions/login';
import '../../styles/loginUser.css';

const LoginUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="login__page">
      <form className="login__form">
        <h1>Login Here</h1>
        <input
          id="username"
          type="username"
          placeholder=" Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // to hold user input
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__button" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
