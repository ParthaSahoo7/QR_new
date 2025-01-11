import React, { useState,useEffect,useRef } from 'react';
import MobileInput from './components/MobileInput';
import OTPInputComponent from './components/OTPInputComponent';
import {toast, Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';



const App = () => {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [qrId, setQrId] = useState('');
  const toastShownRef = useRef(false);


  // Extract qr_id from the URL
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/success') {
      return; // Skip the logic if the current path is /success
    }
    // const params = new URLSearchParams(location.search);
    const params = new URLSearchParams(location.search);
    const qr_id = params.get('qr_id');
    if (qr_id) {
      setQrId(qr_id);
    } else if (!qrId && !toastShownRef.current){
      
      toast.error('QR ID is missing in the URL.');
      toastShownRef.current = true;
      
    }
  }, [location,qrId]);
    
  

  const handleOTPRequest = (mobile, countryCode) => {
    setMobile(mobile);
    setCountryCode(countryCode);
    setIsOTPSent(true);
  };

  

  return (
    <div >
      <Toaster />
      
      <Routes>
        <Route path="/" 
        element={!isOTPSent ? (
        <MobileInput onOTPRequest={handleOTPRequest}  qrId={qrId} />
      ) : (
        <OTPInputComponent mobile={mobile} countryCode={countryCode} qrId={qrId} setIsOTPSent={setIsOTPSent}/>
      )}
      />
      <Route path="/success" element={<Header />} />
      </Routes>
    </div>
  );
};

export default App;








