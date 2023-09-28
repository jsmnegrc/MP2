import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PropertyItem.css";
import http from "../../../../library/http";

const PropertyItem = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const propertyCategories = [
    { id: "all", label: "All Categories" },
    { id: "4", label: "Apartment" },
    { id: "16", label: "Townhouses" },
    { id: "3", label: "Villas" },
    { id: "18", label: "Penthouses" },
    { id: "21", label: "Hotel Apartments" },
    { id: "19", label: "Villa Compound" },
    { id: "14", label: "Residential Plot" },
    { id: "12", label: "Residential Floor" },
    { id: "17", label: "Residential Building" },
    { id: "5", label: "Office" },
    { id: "6", label: "Shop" },
    { id: "7", label: "Warehouse" },
    { id: "9", label: "Labour camp" },
    { id: "25", label: "Commercial Villa" },
    { id: "20", label: "Bulk Units" },
    { id: "15", label: "Commercial Plot" },
    { id: "13", label: "Commercial Floor" },
    { id: "10", label: "Commercial Building" },
    { id: "8", label: "Factory" },
    { id: "22", label: "Industrial Land" },
    { id: "23", label: "Mixed Use Land" },
    { id: "24", label: "Showroom" },
    { id: "11", label: "Other Commercial" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "/properties/list",
          params: {
            locationExternalIDs: "5002,6020",
            purpose: "for-rent",
            hitsPerPage: "25",
            page: currentPage,
            lang: "en",
            sort: "city-level-score",
            rentFrequency: "monthly",
            categoryExternalID: selectedPropertyType || undefined,
          },
        };

        try {
          const response = await http.request(options);

          if (Array.isArray(response.data.hits)) {
            setPropertyList(response.data.hits);
            setTotalPages(response.data.nbPages);
          }
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPage, selectedPropertyType]);

  const handlePropertyTypeChange = (propertyType) => {
    setSelectedPropertyType(propertyType);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="filter-container">
          <div>
            <p className="filter-search p-2 fw-bold">Select Property Type</p>
            <ul className="property-type-list">
              {propertyCategories.map((category) => (
                <li
                  key={category.id}
                  className={
                    selectedPropertyType === category.id ? "active" : ""
                  }
                  onClick={() => handlePropertyTypeChange(category.id)}
                >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={9}>
          {propertyList.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <div>
              <Row>
                {propertyList.map((property) => (
                  <Col className="mb-4" key={property.id} xs={12} md={6} lg={4}>
                    <Card
                      className="card-list mt-4"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Card.Img
                        className=" card-img w-150 "
                        variant="top"
                        src={property.coverPhoto.url}
                      />
                      <Card.ImgOverlay>
                        <h5>
                          <Badge
                            className="text-capitalize fw-light"
                            bg="success"
                          >
                            {property.purpose}
                          </Badge>
                        </h5>
                      </Card.ImgOverlay>
                      <Card.Body
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Card.Title className="title fw-bold">
                          {property.title}
                        </Card.Title>
                        <Card.Title className="price text-success ">
                          Price: {property.price} AED/month
                        </Card.Title>

                        <ListGroup
                          className="mb-2"
                          style={{ marginTop: "auto" }}
                          horizontal
                        >
                          <li className="card-item mx-2 text-muted border-right">
                            <span className="fw-semibold">
                              {" "}
                              <box-icon
                                name="bed"
                                size="xs"
                                color="#7d7878"
                              ></box-icon>
                            </span>
                            <br />
                            <span>Rooms: {property.rooms}</span>
                          </li>
                          <li className="card-item mx-2 text-muted">
                            <span className="fw-semibold">
                              {" "}
                              <box-icon
                                name="bath"
                                size="xs"
                                color="#7d7878"
                              ></box-icon>
                            </span>{" "}
                            <br />
                            <span> Baths: {property.baths}</span>
                          </li>
                          <li className="mx-2 text-muted">
                            <span className="fw-semibold">
                              {" "}
                              <box-icon
                                name="square"
                                size="xs"
                                color="#7d7878"
                              ></box-icon>
                            </span>{" "}
                            <br />
                            <span> Area: {property.area}</span>
                          </li>
                        </ListGroup>
                        <Card.Footer className="footer p-3 d-flex fixed-height-footer">
                          <img
                            className="img-agent mx-2"
                            src={property.agency.logo.url}
                            alt=""
                          />
                          <Card.Title className="fs-6 fw-medium">
                            Owner/Agent:
                            <Card.Subtitle className="mt-1 fs-6 fw-light">
                              {property.agency.name}
                            </Card.Subtitle>
                          </Card.Title>
                        </Card.Footer>
                        <Button
                          className="btn-item btn-success"
                          as={Link}
                          to={`/propertydetails/${property.externalID}`}
                          variant="primary"
                        >
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="pagination-container">
                {currentPage > 1 && (
                  <Button className="mx-3" onClick={handlePreviousPage}>
                    Previous Page
                  </Button>
                )}
                {currentPage < totalPages && (
                  <Button onClick={handleNextPage}>Next Page</Button>
                )}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyItem;
