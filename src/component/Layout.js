import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Card from "./Card";

export default function App(props) {
  const Data = props.data;
  return (
    <MDBContainer>
      <MDBRow>
        {Data.map((Dataitem) => (
          <MDBCol size="xl-4 col-md-6">
            <Card
              type={Dataitem.type}
              tier={Dataitem.tier}
              content={Dataitem.content}
              pricing={Dataitem.pricing}
            />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
