import "./App.css";
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Page404 from './Page404';

const Home = React.lazy(() => import("./Home"));
const Country = React.lazy(() => import("./Country"));

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/country/:code",
      element: <Country />,
    },
  ];

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
      errorElement: <Page404 />,
    },
  ]);

  return (<RouterProvider router={router} />);
}

export default App;
