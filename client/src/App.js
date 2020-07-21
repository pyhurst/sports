import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NflTables from "./pages/NflTables/NflTables";
import Login from "./pages/Login/Login";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/tables" component={NflTables} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
