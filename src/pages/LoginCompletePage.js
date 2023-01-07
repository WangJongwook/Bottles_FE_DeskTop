import { useContext } from "react";

import SideBar from "../components/SideBar/SideBar";
import AuthContext from "../store/auth-context";

const LoginCompletePage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  //let token = authCtx.login(token);

  return (
    <section>
      {/* <h2>{authCtx.token}</h2> */}
      <SideBar></SideBar>
    </section>
  );
};

export default LoginCompletePage;
