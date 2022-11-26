import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App(props) {
  return (
    <MDBCard alignment="center" className="mb-5">
      <MDBCardHeader>{props.type}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{props.tier}</MDBCardTitle>
        <MDBCardText>{props.content}</MDBCardText>
        <MDBBtn href="#">BUY</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter className="text-muted">{props.pricing}</MDBCardFooter>
    </MDBCard>
  );
}
