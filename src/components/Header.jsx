import Logo from "./Logo";
import gift from "../assets/Gift.png";
import apple from "../assets/Apple.png";
import playstore from "../assets/Playstore.png";
import React from "react";
import "react-phone-input-2/lib/style.css";

const Header = () => {
  return (
    <div className=" cont relative w-full h-auto bg-white flex flex-col items-center  justify-center">
      {" "}
      <Logo  />{" "}
      <div
        className="contt relative  flex flex-col items-center gap-5 border border-[#040869] mb-1 p-2 rounded-[20px] w-[90%] max-w-[363px]"
        style={{
          height: "auto",
          minHeight: "525px",
          paddingLeft: "5px",
          paddingRight: "5px",
          marginTop: "1vw", // Adjust this margin to provide space between logo and div
          overflow:"hidden",
        }}
      >
        {" "}
        <img
          src={gift}
          alt="Gift Logo"
          className="w-[70%] max-w-[250px] h-auto "
        />{" "}
        <div
          className="text-center "
          style={{ width: "auto", maxWidth: "108px", height: "auto" }}
        >
          {" "}
          <h2
            style={{
              fontFamily: "Playfair Display",
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: "38px",
              color: "#040869",
            }}
          >
            {" "}
            Done!{" "}
          </h2>{" "}
        </div>{" "}
        <div
          className="flex flex-col items-center justify-center "
          style={{ width: "90%", height: "auto" }}
        >
          {" "}
          <p
            style={{
              fontFamily: "Playfair",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            {" "}
            Select your platform <br /> (iOS or Android) below to <br /> download the
            app and grow your business for{" "}
          </p>{" "}
          <span
            style={{
              fontFamily: "Playfair",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "38.4px",
              textAlign: "center",
            }}
          >
            {" "}
            FREE{" "}
          </span>{" "}
          <p
            style={{
              fontFamily: "Playfair",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "center",
            }}
          >
            {" "}
            today!{" "}
          </p>{" "}
        </div>{" "}
        <div className="flex gap-2 mt-4" style={{ width: "90%", height: "auto" }}>
          {" "}
          <button
            className="flex justify-around items-center text-white bg-[#040869] rounded-lg pl-1"
            style={{ width: "48%", height: "52px" }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=ai.lightring.loyaltty",
                "_blank"
              )
            }
          >
            {" "}
            <img
              src={playstore}
              alt="Playstore Logo"
              style={{ width: "40px", height: "40px" }}
            />{" "}
            <div className="flex flex-col p-2">
              {" "}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  textAlign: "left",
                }}
              >
                {" "}
                Get it on{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  textAlign: "left",
                  whiteSpace: "nowrap"
                }}
              >
                {" "}
                Google Play{" "}
              </p>{" "}
            </div>{" "}
          </button>{" "}
          <button
            className="flex justify-around items-center text-white bg-[#040869] rounded-lg pl-1"
            style={{ width: "48%", height: "52px" }}
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/loyaltty-merchant/id6471106229?platform=iphone",
                "_blank"
              )
            }
          >
            {" "}
            <img
              src={apple}
              alt="Apple Logo"
              style={{ width: "40px", height: "40px" }}
            />{" "}
            <div className="flex flex-col p-2">
              {" "}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
              >
                {" "}
                Get it on{" "}
              </p>{" "}
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  textAlign: "left",
                }}
              >
                {" "}
                App Store{" "}
              </p>{" "}
            </div>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}

      <style jsx>{`
        .cont {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: auto;
          padding-top:5px;
          
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

export default Header;
