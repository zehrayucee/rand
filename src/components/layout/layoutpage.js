import React from "react";
import {  Container } from "reactstrap";
//import { displayPartsToString } from "typescript";


import IndexNavbar from "../Navbars/IndexNavbar.js";
function layoutpage() {
    return (
        <>
        <IndexNavbar />
        <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/axa.jpg").default + ")",
        }}
      >
      <div className="filter "/>
            <div className="footer register-footer text-center">
              <h6>
                © {new Date().getFullYear()}
              </h6>
            </div>
          </div>
        </>
      );
    }

export default layoutpage;
