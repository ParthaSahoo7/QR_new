import React, { useState, useEffect } from "react";
import {  BsTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import myImage from "./content.png";
import Logo from "./Logo";
import phoneLogo from "./Phone.png";
import welcome from "./Welcome1.png";


const MobileInput = ({ onOTPRequest,qrId }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  // const [qrId, setQrId] = useState("");
  

  // Extract qr_id from the URL
  // const location = useLocation();
  // useEffect(() => {
  //   // const params = new URLSearchParams(location.search);
  //   const params = new URLSearchParams(location.search);
  //   const qr_id = params.get('qr_id');
  //   if (qr_id) {
  //     setQrId(qr_id);
  //   } else {
  //     console.log('QR ID is missing in the URL.');
  //     // toast.error('QR ID is missing in the URL.');
  //   }
  // }, [location]);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    // const match = phone.trim().match(/^\+?(\d+)\s+(.+)$/);
    // console.log(match,phone);
    // if (!match ) {
    //   toast.error('Invalid phone number format');
    //   return;
    // }

    // // Extract the country code
    // const countryCode = `+${phone.split(' ')[0]}`;
    // const mobileNumber = phone.replace(countryCode, '').trim();

    const countryCode = phone.slice(0, -10);
    const mobileNumber = phone.slice(-10);

    console.log(countryCode, mobileNumber);
    console.log(qrId);
    

    

    
      // const countryCode = match[1]; // First capture group: Country code
      // const mobileNumber = match[2].replace(/[\s()]/g, ""); // Remove spaces, '(' and ')' from the mobile number

      
    

    // Extract the country code and mobile number
    // const splitIndex = phone.search(/\d/);
    // const countryCode = `+${phone.slice(0, splitIndex).replace(/[^0-9]/g, "")}`;
    // const mobileNumber = phone.slice(splitIndex).replace(/\s/g, "");

    if (!countryCode || !mobileNumber) {
      toast.error("Invalid phone number format.");
      return;
    }

    setLoading(true);

    try {
      await sendRegisterOTP(mobileNumber, countryCode, qrId);
      toast.success("OTP sent successfully!");
      onOTPRequest(mobileNumber, countryCode, qrId); // Proceed to OTP input page
    } catch (error) {
      toast.error(error.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center">
      {" "}
      <Logo />{" "}
      <div className="relative flex flex-col items-center justify-center border border-[#040869] mb-24 p-4 rounded-[20px] w-[90%] max-w-[363px] " style={{
          
          height: "auto",
          
          paddingLeft: "15px",
          paddingRight: "15px",
          top: "20%",
          
        }}>
        {" "}
        <img
          src={welcome}
          alt="Welcome Logo"
          className="w-[70%] max-w-[250px] h-auto"
        />{" "}
        <h2 className="font-playfair text-[#040869] text-[28px] font-semibold leading-[38px] text-center mt-6">
          {" "}
          Welcome to Loyaltty{" "}
        </h2>{" "}
        <div className="flex items-center space-x-2 mt-6 w-full">
          {" "}
          <img
            src={phoneLogo}
            alt="Phone Logo"
            className="w-[27px] h-[27px]"
          />{" "}
          <p className="font-playfair text-[#040869] text-[22px] font-bold leading-[26.4px]" style={{whiteSpace: "nowrap"}}>
            {" "}
            Verify your phone number{" "}
          </p>{" "}
        </div>{" "}
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass="w-full bg-[#EAEBFF]"
          containerClass="w-full mt-4"
        />{" "}
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={handleSendOTP}
          className={`mt-4 w-full h-[51px] rounded-[9px] bg-[#040869] text-white font-playfair text-[22px] font-bold leading-[38px] text-center ${
            loading ? "flex items-center justify-center" : ""
          }`}
          disabled={loading}
        >
          {" "}
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}{" "}
          {loading ? "Sending..." : "Send OTP"}{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
  
  // return (
  //   <section className="relative bg-[#E0E7FF] flex items-center justify-center h-screen">
  //     <div 
  //   className="absolute inset-0 bg-cover bg-center opacity-30" 
  //   style={{
  //     backgroundImage: `url('https://clipground.com/images/pattern-png-transparent-4.png')`,
      
  //   }}>
  // </div>
      
        
  //     <div className=" relative z-10 w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8">
  //       <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
  //         WELCOME TO LOYALTTY
  //       </h2>
  //       {/* <h4 className="text-center leading-normal text-white font-serif text-2xl  mb-6">
  //         to LOYALTTY
  //       </h4> */}
  //       <>
  //         <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
  //           <BsTelephoneFill size={30} />
  //         </div>
  //         <label
  //           htmlFor=""
  //           className="font-bold text-xl text-white text-center"
  //         >
  //           Verify your phone number
  //         </label>
  //         <PhoneInput
  //           country={"us"}
  //           value={phone}
  //           onChange={(value) => setPhone(value)}
  //         />
  //         <button
  //           onClick={handleSendOTP}
  //           className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
  //           disabled={loading}
  //         >
  //           {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //           {loading ? "Sending..." : "Send OTP"}
  //         </button>
  //       </>
  //     </div>
      
  //   </section>
  // );
};

export default MobileInput;
