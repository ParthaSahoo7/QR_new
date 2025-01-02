import React, { useState, useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP, verifyRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import myImage from "./content.png";
import Logo from "./Logo";
import phoneLogo from "./Phone.png";
import welcome1 from "./Welcome2.png";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";

const Example = ({ mobile, countryCode, qrId }) => {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer for the resend button
  const navigate = useNavigate();

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleResendOTP = async () => {
    if (!qrId) {
      toast.error("QR ID is required.");
      return;
    }

    setLoading(true);

    try {
      await sendRegisterOTP(mobile, countryCode, qrId);
      toast.success("OTP resent successfully!");
      setResendTimer(30); // Reset the timer
    } catch (error) {
      toast.error(error.message || "Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }
    setLoading(true);
    try {
      console.log(mobile, otp, countryCode, qrId);
      const response = await verifyRegisterOTP(mobile, otp, countryCode, qrId);
      // const response = { status: 200 };
      console.log(response);
      toast.success("OTP verified successfully!");
      if (response.success === true) {
        navigate("/success"); // Replace with the actual path you want to redirect to
      } else {
        toast.error("Unexpected status code received.");
      }
    } catch (error) {
      toast.error(error.message || "Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <div className=" relative w-full h-screen bg-white flex flex-col items-center justify-center ">
  //     {" "}
  //     <Logo />{" "}
  //     <div
  //       className="relative flex flex-col items-center justify-around  border border-[#040869] mb-24"
  //       style={{
  //         width: "90%",
  //         maxWidth: "363px",
  //         height: "auto",
  //         minHeight: "575px",
  //         paddingLeft: "5px",
  //         paddingRight: "5px",
  //         top: "20%",
  //         border: "1px solid #040869 ",
  //          borderRadius: "20px",
  //       }}
  //     >
  //       {" "}
  //       {/* <img
  //         src={welcome1}
  //         alt="Welcome1 Logo"
  //         style={{
  //           position: "absolute",
  //           width: "274px",
  //           height: "202.9px",
  //           top: "17px",
  //           left: "42px",
  //         }}
  //       /> */}
  //       <img
  //         src={welcome1}
  //         alt="Welcome1 Logo"
  //         className="w-[70%] max-w-[250px] h-auto "
  //       />{" "}
  //       <div
  //         style={{
  //           position: "absolute",
  //           width: "248px",
  //           height: "38px",
  //           top: "220px",
  //           left: "48px",
  //         }}
  //       >
  //         <h2
  //           // className="text-lg font-medium text-center mb-4"
  //           style={{
  //             fontFamily: "Playfair Display",
  //             fontSize: "28px",
  //             fontWeight: 600,
  //             lineHeight: "38px",
  //             textAlign: "center",
  //             textUnderlinePosition: "from-font",
  //             textDecorationSkipInk: "none",
  //             color: "#040869",
  //             whiteSpace: "nowrap", // Prevent text from wrapping
  //           }}
  //         >
  //           Welcome to Loyaltty
  //         </h2>
  //       </div>

  //       <div
  //         className="text-right"
  //         style={{
  //           width: "auto",
  //           height: "17px",
  //           top: "299px",
  //           left: "220px",
  //           gap: "0px",

  //           position: "absolute",
  //         }}
  //       >
  //         {resendTimer > 0 ? (
  //           <p
  //             // className="text-sm text-center mb-4"
  //             style={{
  //               color: "#040869",
  //               fontFamily: "Playfair",
  //               fontSize: "14px",
  //               fontWeight: 700,
  //               lineHeight: "16.8px",
  //               textAlign: "left",
  //               textDecorationLine: "underline",
  //               textDecorationStyle: "solid",
  //               textUnderlinePosition: "from-font",
  //               textDecorationSkipInk: "auto",
  //               flex: 1, // Make the p tag take up the remaining space
  //               whiteSpace: "nowrap", // Prevent text from wrapping
  //               overflow: "hidden", // Hide overflow
  //             }}
  //           >
  //             Resend OTP in <span>{resendTimer}s</span>
  //           </p>
  //         ) : (
  //           <button
  //             onClick={handleResendOTP}
  //             style={{
  //               // position: "absolute",
  //               color: "#040869", // Text color
  //               fontFamily: "Playfair",
  //               fontSize: "14px",
  //               fontWeight: 700,
  //               lineHeight: "16.8px",

  //               textDecorationLine: "underline",
  //               textDecorationStyle: "solid",
  //               textUnderlinePosition: "from-font",
  //               textDecorationSkipInk: "auto",
  //             }}
  //           >
  //             Resend OTP
  //           </button>
  //         )}
  //       </div>
  //       <PhoneInput
  //         country={countryCode}
  //         value={mobile}
  //         disabled={true}
  //         inputClass="w-full"
  //         inputStyle={{ backgroundColor: "#EAEBFF" }}
  //         style={{
  //           width: "305px",
  //           height: "51px",
  //           top: "332px",
  //           left: "29px",
  //           gap: "0px",

  //           position: "absolute",
  //         }}
  //       />

  //       <div
  //         style={{
  //           width: "145px",
  //           height: "22px",
  //           top: "394px",
  //           left: "31px",
  //           gap: "0px",

  //           position: "absolute",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <img
  //           src={phoneLogo}
  //           alt="Phone Logo"
  //           style={{
  //             width: "19px",
  //             height: "19px",
  //           }}
  //         />
  //         <div
  //           style={{
  //             width: "115px",
  //             height: "22px",
  //             top: "394px",
  //             left: "58px",
  //             gap: "0px",

  //             // position: "absolute",
  //           }}
  //         >
  //           <p
  //             // className="text-sm text-center mb-4"
  //             style={{
  //               color: "#040869",
  //               fontFamily: "Playfair",
  //               fontSize: "18px",
  //               fontWeight: 700,
  //               lineHeight: "21.6px",
  //               textAlign: "left",
  //               textUnderlinePosition: "from-font",
  //               textDecorationSkipInk: "none",
  //               flex: 1, // Make the p tag take up the remaining space
  //               whiteSpace: "nowrap", // Prevent text from wrapping
  //               overflow: "hidden", // Hide overflow
  //             }}
  //           >
  //             Enter the OTP
  //           </p>
  //         </div>
  //       </div>

  //       <div
  //         style={{
  //           position: "absolute",
  //           top: "425px",
  //         }}
  //       ><OTPInput
  //                 value={otp}
  //                 onChange={setOTP}
  //                 // separator={<span className="mx-2">-</span>}
  //                 autoFocus
  //                 OTPLength={4}
  //                 otpType="number"
  //                 disabled={false}
  //                 // secure
  //                 // inputClassName="flex-grow  h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
  //                 className="opt-container "
  //                 inputClassName="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border border-gray-300 text-center"

  //               /></div>

  //       <button
  //         onClick={handleVerifyOTP}
  //         // className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  //         disabled={loading}
  //         style={{
  //           width: "304px",
  //           height: "51px",
  //           top: "496px",
  //           left: "29px",
  //           gap: "0px",
  //           borderRadius: "9px ", // Apply the custom border radius

  //           position: "absolute",
  //           backgroundColor: "#040869",
  //           color: "white", // Text color
  //           fontFamily: "Playfair",
  //           fontSize: "22px",
  //           fontWeight: "700",
  //           lineHeight: "38px",
  //           textAlign: "center",
  //           textUnderlinePosition: "from-font",
  //           textDecorationSkipInk: "none",
  //         }}
  //       >
  //         {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //         {loading ? "Verifying..." : "Verify OTP"}
  //       </button>
  //     </div>

  //   </div>
  // );

  // return (
  //   <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center">
  //     {" "}
  //     <Logo />{" "}
  //     <div className="relative flex flex-col items-center justify-around border border-[#040869] mb-24 p-4 rounded-[20px] w-[90%] max-w-[363px]">
  //       {" "}
  //       <img
  //         src={welcome1}
  //         alt="Welcome1 Logo"
  //         className="w-[70%] max-w-[250px] h-auto"
  //       />{" "}
  //       <h2 className="absolute top-[220px] left-[48px] w-[248px] text-center font-playfair text-[#040869] text-[28px] font-semibold leading-[38px] whitespace-nowrap">
  //         {" "}
  //         Welcome to Loyaltty{" "}
  //       </h2>{" "}
  //       <div className="absolute top-[299px] left-[220px] text-right">
  //         {" "}
  //         {resendTimer > 0 ? (
  //           <p className="font-playfair text-[#040869] text-[14px] font-bold leading-[16.8px] underline">
  //             {" "}
  //             Resend OTP in <span>{resendTimer}s</span>{" "}
  //           </p>
  //         ) : (
  //           <button
  //             onClick={handleResendOTP}
  //             className="font-playfair text-[#040869] text-[14px] font-bold leading-[16.8px] underline"
  //           >
  //             {" "}
  //             Resend OTP{" "}
  //           </button>
  //         )}{" "}
  //       </div>{" "}
  //       <PhoneInput
  //         country={countryCode}
  //         value={mobile}
  //         disabled
  //         inputClass="w-full bg-[#EAEBFF]"
  //         containerClass="absolute top-[332px] left-[29px] w-[305px] h-[51px]"
  //       />{" "}
  //       <div className="absolute top-[394px] left-[31px] flex items-center space-x-2">
  //         {" "}
  //         <img
  //           src={phoneLogo}
  //           alt="Phone Logo"
  //           className="w-[19px] h-[19px]"
  //         />{" "}
  //         <p className="font-playfair text-[#040869] text-[18px] font-bold leading-[21.6px]">
  //           {" "}
  //           Enter the OTP{" "}
  //         </p>{" "}
  //       </div>{" "}
  //       <div className="absolute top-[425px]">
  //         {" "}
  //         <OTPInput
  //           value={otp}
  //           onChange={setOTP}
  //           autoFocus
  //           OTPLength={4}
  //           otpType="number"
  //           disabled={false}
  //           className="opt-container"
  //           inputClassName="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border border-gray-300 text-center"
  //         />{" "}
  //       </div>{" "}
  //       <button
  //         onClick={handleVerifyOTP}
  //         className={`absolute top-[496px] left-[29px] w-[304px] h-[51px] rounded-[9px] bg-[#040869] text-white font-playfair text-[22px] font-bold leading-[38px] text-center ${
  //           loading ? "flex items-center justify-center" : ""
  //         }`}
  //         disabled={loading}
  //       >
  //         {" "}
  //         {loading ? <CgSpinner className="animate-spin mr-2" /> : null}{" "}
  //         {loading ? "Verifying..." : "Verify OTP"}{" "}
  //       </button>{" "}
  //     </div>
  //   </div>
  // );

  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center">
      {" "}
      <Logo />{" "}
      <div className="relative flex flex-col items-center justify-around border border-[#040869] mb-24 p-4 rounded-[20px] w-[90%] max-w-[363px]" style={{
          
          height: "auto",
          
          paddingLeft: "15px",
          paddingRight: "15px",
          top: "20%",
          
        }}>
        {" "}
        <img
          src={welcome1}
          alt="Welcome1 Logo"
          className="w-[70%] max-w-[250px] h-auto"
        />{" "}
        <h2 className="font-playfair text-[#040869] text-[28px] font-semibold leading-[38px] text-center mt-6">
          {" "}
          Welcome to Loyaltty{" "}
        </h2>{" "}
        <div className="text-right mt-4 w-full">
          {" "}
          {resendTimer > 0 ? (
            <p className="font-playfair text-[#040869] text-[14px] font-bold leading-[16.8px] underline">
              {" "}
              Resend OTP in <span>{resendTimer}s</span>{" "}
            </p>
          ) : (
            <button
              onClick={handleResendOTP}
              className="font-playfair text-[#040869] text-[14px] font-bold leading-[16.8px] underline"
            >
              {" "}
              Resend OTP{" "}
            </button>
          )}{" "}
        </div>{" "}
        <PhoneInput
          country={countryCode}
          value={mobile}
          disabled
          inputClass="w-full bg-[#EAEBFF]"
          containerClass="w-full mt-4"
        />{" "}
        <div className="flex items-center space-x-2 mt-4 w-full">
          {" "}
          <img
            src={phoneLogo}
            alt="Phone Logo"
            className="w-[19px] h-[19px]"
          />{" "}
          <p className="font-playfair text-[#040869] text-[18px] font-bold leading-[21.6px]">
            {" "}
            Enter the OTP{" "}
          </p>{" "}
        </div>{" "}
        <OTPInput
          value={otp}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          className="opt-container mt-4 w-full"
          inputClassName="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md border border-gray-300 text-center"
        />{" "}
        <button
          onClick={handleVerifyOTP}
          className={`mt-4 w-full h-[51px] rounded-[9px] bg-[#040869] text-white font-playfair text-[22px] font-bold leading-[38px] text-center ${
            loading ? "flex items-center justify-center" : ""
          }`}
          disabled={loading}
        >
          {" "}
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}{" "}
          {loading ? "Verifying..." : "Verify OTP"}{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default Example;
