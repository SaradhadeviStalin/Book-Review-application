import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <body>
    <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required></input>
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login"></input>
        <div class="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>

  </body>

    </div>
  );
}

export default App;
