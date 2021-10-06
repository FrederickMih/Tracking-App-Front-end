import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/index';
import '../../styles/loginUser.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    if (username && email !== '') {
      dispatch(loginAction(username, email));
    } else {
      alert('Username or Email CANNOT be empty please');
    }
  };

  return (
    <div className="login__page">
      <form className="login__form">
        <h1>Login Here</h1>
        <input id="username" type="username" placeholder="Username" />
        <input id="email" type="email" placeholder="Email" />
        <button type="submit" className="submit__button" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
