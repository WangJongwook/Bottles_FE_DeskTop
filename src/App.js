import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import SideBar from "./components/SideBar/SideBar";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LoginCompletePage from "./pages/LoginCompletePage";

import Home from "./pages/Home";
import Myfeed from "./pages/MyFeed";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Setting from "./pages/Setting";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/loginCompletePage">
          <LoginCompletePage />
        </Route>
        <Router>
          <SideBar>
            <Route path="/home" element={<Home />} />
            <Route path="/myfeed" element={<Myfeed />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<> not found</>} />
          </SideBar>
        </Router>
      </Switch>
    </Layout>
  );
}

export default App;
