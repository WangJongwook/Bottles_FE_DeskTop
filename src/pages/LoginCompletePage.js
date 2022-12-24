import { useContext } from "react";

import AuthContext from "../store/auth-context";

const LoginCompletePage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  //let token = authCtx.login(token);

  return (
    <section>
      <h1>Your token is..</h1>
      <h2>{authCtx.token}</h2>
    </section>
  );
};

export default LoginCompletePage;
