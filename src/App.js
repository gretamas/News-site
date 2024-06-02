import React from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import BreakingNews from './Components/BreakingNews';
import Main from './Components/SecondaryNavigation';
//import './App.css';

function App() {
    return (
        <div>
            <Navigation />
            <Header/>
            <BreakingNews/>
            <Main/>
        </div>
    );
}

export default App;

