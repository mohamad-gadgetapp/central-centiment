import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import MainScreen from "./pages/MainScreen";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Footer from "./common/Footer";
import ThanksPage from "./common/ThanksPage";

function App() {
  return (
    <Router>
      <div style={{ width: '100%' }}>
        <Header />
        <div style={{ paddingTop: '10.5rem', width: '100%' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<MainScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
