import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

// GLOBAL STYLESHEET
import "./styles/global.css";
import "./styles/styles.css";

// PAGES
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// STYLESHEETS
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="alpha_version">
      <h6>Alpha Version</h6>
    </div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/admin-login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
