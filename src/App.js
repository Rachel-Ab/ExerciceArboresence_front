import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Treeview from "./Treeview"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Treeview} />
      </Router>
    </div>
  );
}

export default App;
