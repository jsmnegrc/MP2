import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertiesList = ({ properties }) => {
  return (
    <Card>
      <Card.Img variant="top" src={properties.coverPhoto} />
      <Card.Body>
        <Card.Title>{properties.title}</Card.Title>
        <Card.Text>{properties.price}</Card.Text>
        <Button
          as={Link}
          to={`/properties/${property.id}`}
          variant="primary"
          className="d-flex align-items-center gap-2"
        >
          Visit Page<box-icon name="link-external" color="white"></box-icon>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PropertiesList;
