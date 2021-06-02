import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Home from "./Routes/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/list",
    component: React.lazy(() => import("./Routes/List")),
  },
  {
    path: "/table",
    component: React.lazy(() => import("./Routes/Table")),
  },
  {
    path: "/details/:id",
    component: React.lazy(() => import("./Routes/Details")),
  },
  {
    path: "/form",
    component: React.lazy(() => import("./Routes/Form")),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
