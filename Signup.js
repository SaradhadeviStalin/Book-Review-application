import logo from './logo.svg';
import './Signup.css';

function Signup() {
  return (
    <div className="App">
    <body>
    <div class="center">
      <h1>Sign Up</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required></input>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="email" required></input>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="password" required></input>
          <span></span>
          <label>Password</label>
        </div>
        <div class="txt_field">
          <input type="password" required></input>
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Sign Up"></input><br></br><br></br>
       
      </form>
    </div>

  </body>


    </div>
  );
}

export default Signup;
