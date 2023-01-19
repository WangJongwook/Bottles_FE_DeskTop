import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import ProfilePage from "./pages/ProfilePage";

import Home from "./pages/Home";
import Myfeed from "./pages/MyFeed";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/loginCompletePage" element={<Home />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/myfeed" element={<Myfeed />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
