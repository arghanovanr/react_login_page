import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "../style.css";
function ProductFeature() {
  return (
    <MDBContainer fluid className="Feature p-5 ml-5 mr-5">
      <h2 className="my-5 display-3 fw-bold ls-tight px-3">
        Product Feature <br />
      </h2>

      <MDBRow>
        <MDBCol size="xl-4 col-md-6 mb-5">
          <MDBIcon fas icon="bullseye mb-5" size="6x" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque
          </p>
        </MDBCol>
        <MDBCol size="xl-4 col-md-6 mb-5">
          <MDBIcon fas icon="award mb-5" size="6x" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque
          </p>
        </MDBCol>
        <MDBCol size="xl-4 col-md-6 mb-5">
          <MDBIcon fas icon="archive mb-5" size="6x" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductFeature;
