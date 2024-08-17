import React, { useState, useEffect } from 'react';
import Popup from './components/popup';
/* import Profile from "./components/profile"; */
import Cards from "./components/cards";
import Footer from "./components/footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ONE_HOUR_IN_MS = 60 * 60 * 1000;

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [isOver18, setIsOver18] = useState(false);

  useEffect(() => {
    const storedValidation = localStorage.getItem('isOver18');
    if (storedValidation) {
      const { timestamp, value } = JSON.parse(storedValidation);
      const now = new Date().getTime();
      if (now - timestamp < ONE_HOUR_IN_MS) {
        setIsOver18(value);
        setShowPopup(false);
      } else {
        localStorage.removeItem('isOver18');
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 500);
  };

  const handleConfirmAge = () => {
    setIsOver18(true);
    setShowPopup(false);

    const now = new Date().getTime();
    localStorage.setItem('isOver18', JSON.stringify({ timestamp: now, value: true }));

    setTimeout(() => localStorage.removeItem('isOver18'), ONE_HOUR_IN_MS);
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} onConfirm={handleConfirmAge} />}
      {isOver18 && (
        <>
{/*           <Profile /> */}
          <Cards />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
