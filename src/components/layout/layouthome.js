/*Çalışan ekran */
import React from "react";
// reactstrap components
// core components
import IndexNavbar from "../Navbars/IndexNavbar.js";
import IndexHeader from "../Headers/IndexHeader.js";
import DemoFooter from "../Footers/DemoFooter.js";
//import DemoFooter from "components/Footers/DemoFooter.js";

function layouthome() {
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
      </div>
      <layouthome/>
      <DemoFooter/>
    </>
  );
}

export default layouthome;
