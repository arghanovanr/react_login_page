import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import User from "../Images/User.png";

export default function Column(props) {
  return (
    <section>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol>
            <div className="d-flex flex-start mb-4">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src={User}
                alt="avatar"
                width="65"
                height="65"
              />

              <MDBCard className="w-100">
                <MDBCardBody>
                  <div>
                    <MDBTypography tag="h5">{props.username}</MDBTypography>
                    <p>{props.comment}</p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
