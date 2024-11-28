import React from 'react';
import Navbar from './components/Navbar.jsx';
import "./components/App.scss";
import Footer from "./layout/Footer.jsx";
import { Outlet } from 'react-router-dom';
import Main from './layout/Main.jsx';

function App() {
    return (
      <div className='app'>
        <Navbar />
        <Main>
        <Outlet />{/* Qui verranno caricati i componenti specifici delle pagine */}
        </Main> 
        <Footer />
      </div>
    );
}

export default App;
