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

const Example2 = ({ onOTPRequest, qrId }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    const countryCode = phone.slice(0, -10);
    const mobileNumber = phone.slice(-10);

    console.log(countryCode, mobileNumber);
    console.log(qrId);
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

  // return (
  //   <div className=" relative w-full h-screen bg-white flex flex-col items-center justify-center ">
  //     <Logo />
  //     <div
  //       className="absolute flex flex-col items-center justify-center"
  //       style={{
  //         width: "363px",
  //         height: "575px",
  //         top: "313px",
  //         left: "33px",
  //         border: "1px solid #040869 ",
  //         borderRadius: "20px",
  //       }}
  //     >
  //       <img
  //         src={welcome}
  //         alt="Welcome Logo"
  //         style={{
  //           position: "absolute",
  //           width: "274px",
  //           height: "202.9px",
  //           top: "17px",
  //           left: "42px",
  //         }}
  //       />
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
  //             whiteSpace: "nowrap" // Prevent text from wrapping
  //           }}
  //         >
  //           Welcome to Loyaltty
  //         </h2>
  //       </div>

  //       <div
  //         style={{
  //           width: "289px",
  //           height: "29px",
  //           top: "288px",
  //           left: "29px",
  //           gap: "0px",

  //           position: "absolute",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <img
  //         src={phoneLogo}
  //         alt="Phone Logo"
  //         style={{

  //           width: "27px",
  //           height: "27px",

  //         }}
  //       />
  //         <div
  //           style={{
  //             width: "247px",
  //             height: "26px",
  //             top: "291px",
  //             left: "71px",
  //             gap: "0px",

  //             // position: "absolute",
  //           }}
  //         >

  //           <p
  //             // className="text-sm text-center mb-4"
  //             style={{
  //               fontFamily: "Playfair",
  //               fontSize: "22px",
  //               fontWeight: 700,
  //               lineHeight: "26.4px",
  //               textAlign: "left",
  //               textUnderlinePosition: "from-font",
  //               textDecorationSkipInk: "none",
  //               flex: 1, // Make the p tag take up the remaining space
  //             whiteSpace: "nowrap", // Prevent text from wrapping
  //              // Hide overflow

  //             }}
  //           >
  //             Verify your phone number
  //           </p>
  //         </div>
  //       </div>
  //       <PhoneInput
  //         country={"us"}
  //         value={phone}
  //         onChange={(value) => setPhone(value)}
  //         inputClass="w-full"
  //         inputStyle={{backgroundColor: '#EAEBFF',}}

  //         style={{width: '305px',
  //           height: '51px',
  //           top: '332px',
  //           left: '29px',
  //           gap: '0px',

  //           position: 'absolute',}}
  //       />
  //       <button
  //         onClick={handleSendOTP}
  //         // className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  //         disabled={loading}
  //         style={{width: '304px',
  //           height: '51px',
  //           top: '496px',
  //           left: '29px',
  //           gap: '0px',
  //           borderRadius: '9px ', // Apply the custom border radius

  //           position: 'absolute',
  //           backgroundColor: '#040869',
  //           color: 'white', // Text color
  //           fontFamily: 'Playfair',
  //   fontSize: '22px',
  //   fontWeight: '700',
  //   lineHeight: '38px',
  //   textAlign: 'center',
  //   textUnderlinePosition: 'from-font',
  //   textDecorationSkipInk: 'none',}}
  //       >
  //         {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //         {loading ? "Sending..." : "Send OTP"}
  //       </button>
  //     </div>

  //     {/* <div className="relative z-10 flex justify-evenly bg-white shadow-lg rounded-lg w-2/3 p-8 gap-4"> */}
  //     {/* <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg flex w-2/3 p-8 relative z-10 gap-4 flex justify-evenly " >
  //       <div className="flex flex-col justify-center items-center mb-6 w-1/2">
  //         <img
  //           src={myImage}
  //           alt="Gift illustration"
  //           className=" object-cover"
  //         />
  //         <h1 className="text-center text-xl font-bold text-gray-700">
  //           Building Bonds, Rewarding Loyalty
  //         </h1>
  //       </div>

  //       <div className="  w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8 justify-center items-center">
  //         <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
  //           WELCOME
  //         </h2>

  //         <>
  //           <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
  //             <BsTelephoneFill size={30} />
  //           </div>
  //           <label
  //             htmlFor=""
  //             className="font-bold text-xl text-white text-center"
  //           >
  //             Verify your phone number
  //           </label>
  //           <PhoneInput
  //             country={"us"}
  //             value={phone}
  //             onChange={(value) => setPhone(value)}
  //           />
  //           <button
  //             onClick={handleSendOTP}
  //             className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
  //             disabled={loading}
  //           >
  //             {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //             {loading ? "Sending..." : "Send OTP"}
  //           </button>
  //         </>
  //       </div>
  //     </div> */}

  //     {/* <div class="flex items-center justify-center h-full">
  //   <h1 class="text-2xl font-bold">Welcome to the Page</h1>
  // </div> */}
  //   </div>
  // );

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
  //   return (
  //     <div className=" relative w-full h-screen bg-white flex flex-col items-center justify-center ">
  //       <Logo />
  //       <div
  //         className="relative flex flex-col items-center justify-around  border border-[#040869] mb-24"
  //         style={{
  //           width: "90%",
  //           maxWidth: "363px",
  //           height: "auto",
  //           minHeight: "575px",
  //           paddingLeft: "5px",
  //           paddingRight: "5px",
  //           top: "20%",
  //           border: "1px solid #040869 ",
  //            borderRadius: "20px",
  //         }}
  //       > {" "}
  //         <img
  //           src={gift}
  //           alt="Gift Logo"
  //           style={{
  //             position: "absolute",
  //             width: "250px",
  //             height: "181.72px",
  //             top: "22px",
  //             left: "54px",
  //           }}
  //         />
  //         <div
  //           style={{
  //             position: "absolute",
  //             width: "108px",
  //             height: "26px",
  //             top: "227px",
  //             left: "125px",
  //           }}
  //         >
  //           <h2
  //             // className="text-lg font-medium text-center mb-4"
  //             style={{
  //               fontFamily: "Playfair Display",
  //               fontSize: "28px",
  //               fontWeight: 600,
  //               lineHeight: "38px",
  //               textAlign: "center",
  //               textUnderlinePosition: "from-font",
  //               textDecorationSkipInk: "none",
  //               color: "#040869",
  //             }}
  //           >
  //             Done !
  //           </h2>
  //         </div>

  //         <div
  //           className="flex flex-col items-center justify-center"
  //           style={{
  //             width: "250px",
  //             height: "158px",
  //             top: "288px",
  //             left: "62px",
  //             gap: "0px",

  //             position: "absolute",
  //           }}
  //         >
  //          <p style={{fontFamily: "Playfair",
  //     fontSize: "20px",
  //     fontWeight: 700,
  //     lineHeight: "24px",
  //     textAlign: "center",
  //     textUnderlinePosition: "from-font",
  //     textDecorationSkipInk: "none",}}>Select your platform <br /> (iOS or Android) below to download the app and grow your business for </p>
  // <span style={{fontFamily: "Playfair",
  //     fontSize: "32px",
  //     fontWeight: 700,
  //     lineHeight: "38.4px",
  //     textAlign: "center",
  //     textUnderlinePosition: "from-font",
  //     textDecorationSkipInk: "none",}}>FREE </span>
  // <p style={{fontFamily: "Playfair",
  //     fontSize: "20px",
  //     fontWeight: 700,
  //     lineHeight: "24px",
  //     textAlign: "center",
  //     textUnderlinePosition: "from-font",
  //     textDecorationSkipInk: "none",}}>today !</p>
  //         </div>

  //         <div style={{width: "327px",
  //   height: "52px",
  //   position: "absolute",
  //   top: "493px",
  //   left: "18px",
  //   display: "flex",
  //   gap: "8px",
  //   }}>
  //     <button
  //           style={{width: "157px",
  //             height: "52px",
  //             borderRadius: "10px",
  //             backgroundColor: "#040869",
  //             display: "flex",
  //             justifyContent: "space-around",

  //           }}
  //           onClick={() => window.open("https://play.google.com/store/apps/details?id=ai.lightring.loyaltty", "_blank")}
  //         >
  //           <img
  //           src={playstore}
  //           alt="Playstore Logo"
  //           style={{
  //             paddingLeft: "4px",
  //             paddingTop: "10px",
  //             width: "40px",
  //             height: "40px",

  //           }}
  //         />
  //           <div className="text-white text-align-left flex flex-col p-2" >
  //             <p style={{fontFamily: "Poppins, sans-serif",
  //   fontSize: "12px",
  //   fontWeight: "600",
  //   lineHeight: "20px",
  //   textAlign: "left",
  //   textUnderlinePosition: "from-font",
  //   textDecorationSkipInk: "none",}}>Get it on</p>
  //             <p style={{fontFamily: "Poppins, sans-serif",
  //   fontSize: "15px",
  //   fontWeight: "600",
  //   lineHeight: "20px",
  //   textAlign: "left",
  //   textUnderlinePosition: "from-font",
  //   textDecorationSkipInk: "none",}}>Google Play

  //             </p>

  //           </div>
  //         </button>

  //         <button
  //           style={{width: "157px",
  //             height: "52px",
  //             borderRadius: "10px",
  //             backgroundColor: "#040869",
  //             display: "flex",
  //             justifyContent: "space-around",

  //           }}
  //           onClick={() => window.open("https://play.google.com/store/apps/details?id=ai.lightring.loyaltty", "_blank")}
  //         >
  //           <img
  //           src={apple}
  //           alt="Apple Logo"
  //           style={{
  //             paddingLeft: "4px",
  //             paddingTop: "10px",
  //             width: "40px",
  //             height: "40px",

  //           }}
  //         />
  //           <div className="text-white text-align-left flex flex-col p-2" >
  //             <p style={{fontFamily: "Poppins, sans-serif",
  //   fontSize: "12px",
  //   fontWeight: "600",
  //   lineHeight: "20px",
  //   textAlign: "left",
  //   textUnderlinePosition: "from-font",
  //   textDecorationSkipInk: "none",}}>Get it on</p>
  //             <p style={{fontFamily: "Poppins, sans-serif",
  //   fontSize: "15px",
  //   fontWeight: "600",
  //   lineHeight: "20px",
  //   textAlign: "left",
  //   textUnderlinePosition: "from-font",
  //   textDecorationSkipInk: "none",}}>App Store

  //             </p>

  //           </div>
  //         </button>

  //         </div>

  //       </div>

  //       {/* <div className="relative z-10 flex justify-evenly bg-white shadow-lg rounded-lg w-2/3 p-8 gap-4"> */}
  //       {/* <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg flex w-2/3 p-8 relative z-10 gap-4 flex justify-evenly " >
  //         <div className="flex flex-col justify-center items-center mb-6 w-1/2">
  //           <img
  //             src={myImage}
  //             alt="Gift illustration"
  //             className=" object-cover"
  //           />
  //           <h1 className="text-center text-xl font-bold text-gray-700">
  //             Building Bonds, Rewarding Loyalty
  //           </h1>
  //         </div>

  //         <div className="  w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8 justify-center items-center">
  //           <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
  //             WELCOME
  //           </h2>

  //           <>
  //             <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
  //               <BsTelephoneFill size={30} />
  //             </div>
  //             <label
  //               htmlFor=""
  //               className="font-bold text-xl text-white text-center"
  //             >
  //               Verify your phone number
  //             </label>
  //             <PhoneInput
  //               country={"us"}
  //               value={phone}
  //               onChange={(value) => setPhone(value)}
  //             />
  //             <button
  //               onClick={handleSendOTP}
  //               className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
  //               disabled={loading}
  //             >
  //               {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //               {loading ? "Sending..." : "Send OTP"}
  //             </button>
  //           </>
  //         </div>
  //       </div> */}

  //       {/* <div class="flex items-center justify-center h-full">
  //     <h1 class="text-2xl font-bold">Welcome to the Page</h1>
  //   </div> */}
  //     </div>
  //   );
};

export default Example2;
