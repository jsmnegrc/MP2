import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import ContentItem from "./ContentItem";

const Content = () => {
  const [properties, setProperties] = useState([]);
  const [location, setLocation] = useState('San Francisco'); // Default location

  useEffect(() => {
    getProperties();
  }, [location]); // Run the effect whenever the selected location changes

  async function getProperties() {
    try {
      const response = await axios.get('https://unofficial-redfin.p.rapidapi.com/properties');
      
      if (response.status === 200) {
        setProperties(response.data);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to handle changes in the selected location
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <section id="properties" className="my-4">
      {/* ... rest of your component code ... */}
    </section>
  );
};

export default Content;
