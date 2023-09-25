import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Propertydetails.css";

const Propertydetails = () => {
  const [propertydetails, setPropertydetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getPropertydetails(params.externalID);
  }, []);

  async function getPropertydetails(externalID) {
    const options = {
      headers: {
        "X-RapidAPI-Key": "3c1cd34e83mshab587e466a5d3d1p1fbacajsndbc48cc83696",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.get(
        "https://bayut.p.rapidapi.com/properties/detail?externalID=" +
          externalID,
        options
      );
      setPropertydetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section id="propertydetails" className="mb-4">
        <div className="banner-details mb-4">
          {propertydetails.coverPhoto && (
            <img src={propertydetails.coverPhoto.url} alt="Property Cover" />
          )}
        </div>
      </section>
      <Container>
        <div className="property-details-container">
          <h1 className="text-center pb-3">{propertydetails.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: propertydetails.description }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default Propertydetails;
