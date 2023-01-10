import { useContext } from "react";

import SideBar from "../components/SideBar/SideBar";
import AuthContext from "../store/auth-context";

const LoginCompletePage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  //let token = authCtx.login(token);

  return (
    <SideBar/>
  );
};

export default LoginCompletePage;
