import React from "react";
import logo from "./logo.png";

function Logo() {
  // return (
  //   <div className="flex flex-col items-center bg-white w-full absolute top-0">
  //     {" "}
  //     <img
  //       src={logo}
  //       alt="Loyaltty Logo"
  //       className="logo-img"
  //       style={{ width: "50%", maxWidth: "122.79px", height: "auto" }}
  //     />{" "}
  //     <style>
  //       {" "}
  //       {` .logo-img { margin-top: 2vw; } @media (max-width: 375px) { .logo-img { width: 40% !important; max-width: 84px !important; } } @media (min-width: 768px) { .logo-img { margin-top: 5vw; } } @media (min-width: 1024px) { .logo-img { margin-top: 3vw; } }`}{" "}
  //     </style>{" "}
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center bg-white w-full ">
      {" "}
      <img
        src={logo}
        alt="Loyaltty Logo"
        className="logo-img"
        style={{
          width: "50%",
          maxWidth: "122.79px",
          height: "auto",
          marginTop: "2vw",
          
        }}
      />{" "}
      <style>
        {" "}
        {`  @media (max-width: 375px) { .logo-img { width: 40% !important; max-width: 84px !important; margin-top: 10vw !important; } } @media (min-width: 768px) { .logo-img { margin-top: 5vw; } } @media (min-width: 1024px) { .logo-img { margin-top: 8vw;  } } @media (max-width: 1280px) { .logo-img { margin-top: 10vw;  } } `}
      </style>{" "}
    </div>
  );

  // return (
  //   <div className="flex flex-col items-center bg-white ">
  //     <img
  //       src={logo}
  //       alt="Loyaltty Logo"
  //       className="absolute logo-img"
  //       style={{
  //         width: "50%",
  //         maxWidth: "122.79px",
  //         height: "auto",
  //         top: "16vw",
  //         left: "35vw",
  //       }}
  //     />

  //     <style>
  //       {" "}
  //       {` @media (max-width: 375px) { .logo-img { width: 40% !important; max-width: 84px !important; top: 15vw !important; left: 40vw !important; } } `}{" "}
  //     </style>
  //   </div>
  // );
}

export default Logo;
