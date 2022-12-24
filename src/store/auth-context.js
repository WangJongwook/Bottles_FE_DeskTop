import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//인증 관련  상태를 관리
//이 컴포넌트를 다른 컴포넌트를 감싸는 래퍼로 활용하여
//AuthContex의 context 에 접근한다.
export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  //참 / 거짓을 부울 값으로 변경
  //토큰이 빈 문자열이 아니면 ---> true
  //토큰이 빈 문자열 ---> false
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
