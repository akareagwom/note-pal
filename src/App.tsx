import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <div className="">
        <NavBar/>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
