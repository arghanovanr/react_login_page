import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Product1 from "../Images/Product1.jpg";
import Product2 from "../Images/Product2.jpg";
import Product3 from "../Images/Product3.jpg";
import "../style.css";

export default function App() {
  return (
    <MDBCarousel className="Item imt-5" showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={Product1}
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={Product2}
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={Product3}
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
