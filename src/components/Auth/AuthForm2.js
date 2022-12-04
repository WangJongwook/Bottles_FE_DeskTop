import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  //const idInputRef = useRef();
  const passwordInputRef = useRef();
  //const nameInputRef = useRef();
  const emailInputRef = useRef();
  //const prefaceInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    //const enteredPreface = prefaceInputRef.current.value;

    //optional : Add validation

    let url;

    if (isLogin) {
      url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrIuPKz33xPwFSCorbycANIdfjxIGmId0";
    } else {
      url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrIuPKz33xPwFSCorbycANIdfjxIGmId0";
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            // if (data && data.error && data.error.message){
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
    }; 
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        {/* <div className={classes.control}>
          <label htmlFor="email">Id</label>
          <input type="text" id="id" required ref={idInputRef} />
        </div> */}
        <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
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
            {/* <div className={classes.control}>
              <label htmlFor="email">Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div> */}
            {/* <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div> */}
            {/* <div className={classes.control}>
              <label htmlFor="email">Preface</label>
              <input type="text" id="preface" required ref={prefaceInputRef} />
            </div> */}
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