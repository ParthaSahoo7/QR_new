import React, { useState, useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
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
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const MobileInput = ({ onOTPRequest, qrId }) => {
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
    

    

    // if (!phone || phone.length<10) {
    //   toast.error("Please enter a valid phone number.");
    //   return;
    // }

    // const countryCode = phone.slice(0, -10);
    // const mobileNumber = phone.slice(-10);

    if (!phone) {
      toast.error("Please enter your phone number.");
      return;
    }

    // Parse the phone number using libphonenumber-js
    const phoneNumber = parsePhoneNumberFromString(`+${phone}`);
    console.log(phoneNumber);
    if (!phoneNumber || !phoneNumber.isValid()) {
      toast.error("Invalid phone number. Please check the format.");
      return;
    }

    const countryCode = phoneNumber.countryCallingCode;
    const mobileNumber = phoneNumber.nationalNumber;
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
    <div className="cont relative w-full h-full bg-white flex flex-col items-center justify-center">
      {" "}
      <Logo />{" "}
      <div
        className="contt relative flex flex-col items-center gap-2 border border-[#040869] mb-1 p-2 rounded-[20px] w-[90%] max-w-[363px]"
        style={{
          height: "auto",
          minHeight: "525px",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginTop: "1vw",
          overflow: "hidden",
        }}
      >
        {" "}
        <img
          src={welcome}
          alt="Welcome Logo"
          className="w-[70%] max-w-[250px] h-auto"
        />{" "}
        <h2 className="font-playfair text-[#040869] text-[28px] font-semibold leading-[38px] text-center mt-1">
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
          <p
            className="font-playfair text-[#040869] text-[22px] font-bold leading-[26.4px]"
            style={{ whiteSpace: "nowrap" }}
          >
            {" "}
            Verify your phone number{" "}
          </p>{" "}
        </div>{" "}
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass="w-full bg-[#EAEBFF]"
          containerClass="w-full mt-2"
        />{" "}
        {/* <br />
        <br />
        <br />
        <br /> */}
        <button
          onClick={handleSendOTP}
          className={`mt-24 w-full h-[51px] rounded-[9px] bg-[#040869] text-white font-playfair text-[22px] font-bold leading-[38px] text-center ${
            loading ? "flex items-center justify-center" : ""
          }`}
          disabled={loading}
        >
          {" "}
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}{" "}
          {loading ? "Sending..." : "Send OTP"}{" "}
        </button>{" "}
      </div>{" "}
      <style jsx>{`
        .cont {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        @media (max-width: 375px) {
          .cont {
            height: auto; 
            justify-content: flex-start;
            padding-top: 10px; !important;
            overflow: hidden;
          }
        }
         
        @media (max-width: 540px) {
          .cont {
            height: auto;
            justify-content: flex-start;
            padding-top: 10px;
            overflow: hidden;
          }
        }
        @media (min-width: 540px) {
          .cont {
            justify-content: flex-start;
            padding-top: 1px;
          }
        }
        @media (min-width: 1024px) {
          .cont {
            justify-content: flex-start;
          }
        }
        @media (min-width: 1920px) {
          .cont {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileInput;
