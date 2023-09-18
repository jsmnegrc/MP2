import React from "react";
import { Card } from "react-bootstrap";

const ContentItem = ({ property }) => {
  return (
    <Card>
      <Card.Img variant="top" src={property.thumbnail} />
      <Card.Body>
        <Card.Title>{property.address}</Card.Title>
        <Card.Text>{property.propertyType}</Card.Text>
        <Card.Text>Price: {property.price}</Card.Text>
        <Card.Text>Bedrooms: {property.bedrooms}</Card.Text>
        <Card.Text>Bathrooms: {property.bathrooms}</Card.Text>
        <Card.Text>Area: {property.area} sq. ft.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContentItem;
