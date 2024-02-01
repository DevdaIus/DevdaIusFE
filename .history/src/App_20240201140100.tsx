import React from 'react';
import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import BoardPage from './pages/board';
import MainPage from './pages/main';
import Root from './pages/root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ index: true, element: <MainPage /> },
			{ path: 'board', element: <BoardPage /> },
		],
	},
]);

function App() {
  return (
    <>
      <header>Header</header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
