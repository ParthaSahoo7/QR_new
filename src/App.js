import React, { useState,useEffect,useRef } from 'react';
import MobileInput from './components/MobileInput';
import OTPInputComponent from './components/OTPInputComponent';
import {toast, Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Example from './components/Example';
import Example2 from './components/Example2';

// import OTPInputComponent from './components/OTPInputComponent';

const App = () => {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [qrId, setQrId] = useState('');
  const toastShownRef = useRef(false);
  const navigate = useNavigate();

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
      <Route path="/ex2" element={<Example2 />} />
      <Route path="/ex" element={<Example onOTPRequest={handleOTPRequest}  qrId={qrId} />} />
      </Routes>
    </div>
  );
};

export default App;

//////////////


// import React from 'react';
// import OTPInputComponent from './components/OTPInputComponent';


// const App = () => {
//   const qrId= 'someQrId'; // Replace with actual logic to get qrId
//   const mobile = '1234567890'; // Replace with actual mobile number
//   const countryCode = '91'; // Replace with actual country code

//   return (
//     <div>
//       <OTPInputComponent mobile={mobile} countryCode={countryCode} qrId={qrId} />
//     </div>
//   );
// };

// export default App;






