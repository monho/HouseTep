import React from "react";
import {
  Switch ,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Default from "./components/default/default";
import Order from "./components/order/order";
import Complete from "./components/complete/complete";
import Error from "./components/error/error";

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Default />
        </>
      ),
      children: [],
    },
  ]);
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/order" element={<Order />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  </Router>
  );
}

export default App;
