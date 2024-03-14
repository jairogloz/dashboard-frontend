import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invitation from "./components/Invitation";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invitation" element={<Invitation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
