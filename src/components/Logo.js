import React from "react";
import logo from "./logo.png";

function Logo() {
  // return (
  //   <div className="flex flex-col items-center  bg-white">
  //     <img src={logo} alt="Loyaltty Logo" className="absolute mb-4" style={{width: "122.79px", height:"165.58px",top:"89px",left:"153px"}} />

  //   </div>
  // )

  return (
    <div className="flex flex-col items-center bg-white ">
      <img
        src={logo}
        alt="Loyaltty Logo"
        className="absolute logo-img"
        style={{
          width: "50%",
          maxWidth: "122.79px",
          height: "auto",
          top: "16vw",
          left: "35vw",
        }}
      />

      <style>
        {" "}
        {` @media (max-width: 375px) { .logo-img { width: 40% !important; max-width: 84px !important; top: 15vw !important; left: 40vw !important; } } `}{" "}
      </style>
    </div>
  );
}

export default Logo;
