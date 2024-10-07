import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="page">
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default App;