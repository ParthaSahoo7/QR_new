import Logo from "./Logo";
import gift from "./Gift.png";
import apple from "./Apple.png";
import playstore from "./Playstore.png";
import React from "react";
import "react-phone-input-2/lib/style.css";

const Header = () => {
  // return (
  //   <div className=" relative w-full h-screen bg-white flex flex-col items-center justify-center ">
  //     <Logo />
  //     <div
  //       className="absolute flex flex-col items-center justify-center "
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
  //         src={gift}
  //         alt="Gift Logo"
  //         style={{
  //           position: "absolute",
  //           width: "250px",
  //           height: "181.72px",
  //           top: "22px",
  //           left: "54px",
  //         }}
  //       />
  //       <div
  //         style={{
  //           position: "absolute",
  //           width: "108px",
  //           height: "26px",
  //           top: "227px",
  //           left: "125px",
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
  //           }}
  //         >
  //           Done !
  //         </h2>
  //       </div>

  //       <div
  //         className="flex flex-col items-center justify-center"
  //         style={{
  //           width: "250px",
  //           height: "158px",
  //           top: "288px",
  //           left: "62px",
  //           gap: "0px",

  //           position: "absolute",
  //         }}
  //       >
  //         <p
  //           style={{
  //             fontFamily: "Playfair",
  //             fontSize: "20px",
  //             fontWeight: 700,
  //             lineHeight: "24px",
  //             textAlign: "center",
  //             textUnderlinePosition: "from-font",
  //             textDecorationSkipInk: "none",
  //           }}
  //         >
  //           Select your platform <br /> (iOS or Android) below to download the
  //           app and grow your business for{" "}
  //         </p>
  //         <span
  //           style={{
  //             fontFamily: "Playfair",
  //             fontSize: "32px",
  //             fontWeight: 700,
  //             lineHeight: "38.4px",
  //             textAlign: "center",
  //             textUnderlinePosition: "from-font",
  //             textDecorationSkipInk: "none",
  //           }}
  //         >
  //           FREE{" "}
  //         </span>
  //         <p
  //           style={{
  //             fontFamily: "Playfair",
  //             fontSize: "20px",
  //             fontWeight: 700,
  //             lineHeight: "24px",
  //             textAlign: "center",
  //             textUnderlinePosition: "from-font",
  //             textDecorationSkipInk: "none",
  //           }}
  //         >
  //           today !
  //         </p>
  //       </div>

  //       <div
  //         style={{
  //           width: "327px",
  //           height: "52px",
  //           position: "absolute",
  //           top: "493px",
  //           left: "18px",
  //           display: "flex",
  //           gap: "8px",
  //         }}
  //       >
  //         <button
  //           style={{
  //             width: "157px",
  //             height: "52px",
  //             borderRadius: "10px",
  //             backgroundColor: "#040869",
  //             display: "flex",
  //             justifyContent: "space-around",
  //           }}
  //           onClick={() =>
  //             window.open(
  //               "https://play.google.com/store/apps/details?id=ai.lightring.loyaltty",
  //               "_blank"
  //             )
  //           }
  //         >
  //           <img
  //             src={playstore}
  //             alt="Playstore Logo"
  //             style={{
  //               paddingLeft: "4px",
  //               paddingTop: "10px",
  //               width: "40px",
  //               height: "40px",
  //             }}
  //           />
  //           <div className="text-white text-align-left flex flex-col p-2">
  //             <p
  //               style={{
  //                 fontFamily: "Poppins, sans-serif",
  //                 fontSize: "12px",
  //                 fontWeight: "600",
  //                 lineHeight: "20px",
  //                 textAlign: "left",
  //                 textUnderlinePosition: "from-font",
  //                 textDecorationSkipInk: "none",
  //               }}
  //             >
  //               Get it on
  //             </p>
  //             <p
  //               style={{
  //                 fontFamily: "Poppins, sans-serif",
  //                 fontSize: "15px",
  //                 fontWeight: "600",
  //                 lineHeight: "20px",
  //                 textAlign: "left",
  //                 textUnderlinePosition: "from-font",
  //                 textDecorationSkipInk: "none",
  //               }}
  //             >
  //               Google Play
  //             </p>
  //           </div>
  //         </button>

  //         <button
  //           style={{
  //             width: "157px",
  //             height: "52px",
  //             borderRadius: "10px",
  //             backgroundColor: "#040869",
  //             display: "flex",
  //             justifyContent: "space-around",
  //           }}
  //           onClick={() =>
  //             window.open(
  //               "https://play.google.com/store/apps/details?id=ai.lightring.loyaltty",
  //               "_blank"
  //             )
  //           }
  //         >
  //           <img
  //             src={apple}
  //             alt="Apple Logo"
  //             style={{
  //               paddingLeft: "4px",
  //               paddingTop: "10px",
  //               width: "40px",
  //               height: "40px",
  //             }}
  //           />
  //           <div className="text-white text-align-left flex flex-col p-2">
  //             <p
  //               style={{
  //                 fontFamily: "Poppins, sans-serif",
  //                 fontSize: "12px",
  //                 fontWeight: "600",
  //                 lineHeight: "20px",
  //                 textAlign: "left",
  //                 textUnderlinePosition: "from-font",
  //                 textDecorationSkipInk: "none",
  //               }}
  //             >
  //               Get it on
  //             </p>
  //             <p
  //               style={{
  //                 fontFamily: "Poppins, sans-serif",
  //                 fontSize: "15px",
  //                 fontWeight: "600",
  //                 lineHeight: "20px",
  //                 textAlign: "left",
  //                 textUnderlinePosition: "from-font",
  //                 textDecorationSkipInk: "none",
  //               }}
  //             >
  //               App Store
  //             </p>
  //           </div>
  //         </button>
  //       </div>
  //     </div>

  //   </div>
  // );

  // ------
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center  justify-center">
      {" "}
      <Logo  />{" "}
      <div
        className="relative flex flex-col items-center justify-around  border border-[#040869] mb-24"
        style={{
          width: "90%",
          maxWidth: "363px",
          height: "auto",
          minHeight: "575px",
          paddingLeft: "5px",
          paddingRight: "5px",
          top: "20%",
          border: "1px solid #040869 ",
           borderRadius: "20px",
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
        <div className="flex gap-2" style={{ width: "90%", height: "auto" }}>
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
                "https://play.google.com/store/apps/details?id=ai.lightring.loyaltty",
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
    </div>
  );
};

export default Header;
