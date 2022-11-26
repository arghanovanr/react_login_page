import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../style.css";
import Ilustration from "../Images/ManIlustration.jpg";
function CallToAction() {
  return (
    <MDBContainer fluid className="p-5 ml-5 mr-5">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <img src={Ilustration} width="auto" height="auto" />
        </MDBCol>

        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best Product <br />
            <span className="text-primary">For Business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CallToAction;
