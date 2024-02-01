import React from "react";
import "./App.css";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import BoardPage from "./pages/board";

import Root from "./pages/root";
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "board", element: <BoardPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
