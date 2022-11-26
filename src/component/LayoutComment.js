import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Comment from "./Comment";
export default function App(props) {
  const Data = props.data;
  return (
    <MDBContainer>
      <MDBRow>
        {Data.map((Dataitem) => (
          <MDBCol size={"lg-6"}>
            <Comment username={Dataitem.username} comment={Dataitem.comment} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
