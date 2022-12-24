import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const idInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const prefaceInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    //로그인
    if(isLogin){
      url = 'http://127.0.0.1:8000/api/login/.';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: enteredId,
          pw: enteredPassword
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
        }
      }).then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication failed';
            
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) =>{
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
    } 
      //회원가입
      else {
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredPreface = prefaceInputRef.current.value;
      url = "http://127.0.0.1:8000/api/user/register/";
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: enteredId,
          pw: enteredPassword,
          name: enteredName,
          email: enteredEmail,
          preface: enteredPreface
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
        }
      }).then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication failed';
            
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) =>{
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
    }
    
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Id</label>
          <input type="text" id="id" required ref={idInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {!isLogin && (
          <div>
            <div className={classes.control}>
              <label htmlFor="email">Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Preface</label>
              <input type="text" id="preface" required ref={prefaceInputRef} />
            </div>
          </div>
        )}
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
