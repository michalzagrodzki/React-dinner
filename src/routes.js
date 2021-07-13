import React from "react";
import Home from "./Routes/Home";

export const routes = [
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
    path: "/dinner/:id",
    component: React.lazy(() => import("./Routes/Details")),
  },
  {
    path: "/form",
    component: React.lazy(() => import("./Routes/Form")),
  },
];
