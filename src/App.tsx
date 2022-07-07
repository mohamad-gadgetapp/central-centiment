import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/Header";
import Footer from "./common/Footer";
import ThanksPage from "./common/ThanksPage";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
