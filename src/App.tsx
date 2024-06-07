import React from 'react';
import Profile from "./components/profile";
import Cards from "./components/cards";
import Footer from "./components/footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Profile />
      <Cards />
      <Footer />
    </>
  )
}

export default App
