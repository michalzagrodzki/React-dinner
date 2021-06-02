import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./Routes/Home";
import List from "./Routes/List";
import Table from "./Routes/Table";
import Details from "./Routes/Details";
import Form from "./Routes/Form";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
