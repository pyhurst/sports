import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NflTables from "./pages/NflTables/NflTables";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/tables" component={NflTables} />
      </div>
    </Router>
  );
}

export default App;
