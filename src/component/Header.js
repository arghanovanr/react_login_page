import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import Logo from "../Images/Logo.png";
import "../style.css";

export default function App() {
  return (
    <>
      <div className="Nav">
        <MDBNavbar light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">
              <img
                className="mx-3"
                src={Logo}
                height="30"
                alt=""
                loading="lazy"
              />
              Subscription product website
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </>
  );
}
