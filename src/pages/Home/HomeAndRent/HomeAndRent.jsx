import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomeandRent.css"
import "./HomeAndRentFetch"

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  ButtonText,
  LinkName,
  imageUrl,
}) => (
  <Row className="m-5">
    <Col className="cbanner" xs={12} md={6}>
      <img src={imageUrl} width={550} height={300} alt="banner" className="image-left"/>
    </Col>
    <Col xs={12} md={6}>
      <div style={{ padding: "5px" }}>
        <p className="text-muted font-weight-medium">{purpose}</p>
        <h3 className="font-weight-bold">
          {title1}
          <br />
          {title2}
        </h3>
        <p className="font-size-lg pt-3 pb-3 text-dark">
          {desc1}
          <br />
          {desc2}
        </p>
        <Button variant="success" className="custom-button">
          <Link to={LinkName} className="custom-link">
            {ButtonText}
          </Link>
        </Button>

    </div>
    </Col>
  </Row>
);

function HomeAndRent({ propertiesForSale }) {
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        ButtonText="Explore Renting"
        LinkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        ButtonText="Explore Buying"
        LinkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      </div>
  )
};
      
export default HomeAndRent;
