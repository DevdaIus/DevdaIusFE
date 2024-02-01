import React from 'react';
import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import Root from './pages/Root';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './pages/Board';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "board", element: <Board /> },
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
