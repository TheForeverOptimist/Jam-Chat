import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css"
import jamlogo from '../../images/icons/jamtransparent.png'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="login">
      {/* <div className="login_logo">
        <img src={jamlogo} alt="jam logo" />
      </div> */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signIn">Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello Friend!</h1>
            <p>
              Set up your account and lets start this journey together!
            </p>
            <button id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
      <button id="signup-btn" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? ( <div className="signup-component">

        <SignUpForm setUser={setUser} className={showSignUp ? "active" : ''}/>
      </div>
      ) : ( <div className="login-componenet">

        <LoginForm setUser={setUser} className={showSignUp ? "" : "active"} />
      </div>
      )}
    </div>
  );
}