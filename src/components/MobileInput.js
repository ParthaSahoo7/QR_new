import React, { useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import Logo from "./Logo";
import phoneLogo from "../assets/Phone.png";
import welcome from "../assets/Welcome1.png";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const MobileInput = ({ onOTPRequest, qrId }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    
    if(!qrId){
      toast.error("QR ID missing in the URL");
      return;
    }
    if (!phone) {
      toast.error("Please enter your phone number.");
      return;
    }

    // Parse the phone number using libphonenumber-js
    const phoneNumber = parsePhoneNumberFromString(`+${phone}`);
    
    if (!phoneNumber || !phoneNumber.isValid()) {
      toast.error("Invalid phone number. Please check the format.");
      return;
    }

    const countryCode = phoneNumber.countryCallingCode;
    const mobileNumber = phoneNumber.nationalNumber;
    

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
          enableSearch={true}
          searchPlaceholder="Search for a country"
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
