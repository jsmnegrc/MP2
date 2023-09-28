import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RentList = () => {
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [rentalProperties, setRentalProperties] = useState([]);

  // Function to make the API request
  const fetchData = async () => {
    try {
      // Check if a request is currently pending
      if (!isRequestPending) {
        // Set the request as pending
        setIsRequestPending(true);

        // Make the API request
        const response = await axios.get('https://bayut.p.rapidapi.com/properties', {
          headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
          },
          params: {
            purpose: 'for-rent',
          },
        });

        // Update rentalProperties with the fetched data
        setRentalProperties(response.data);

        setLastRequestTime(Date.now());

        setIsRequestPending(false);
      }
    } catch (error) {
      console.error('API request failed:', error);
      setIsRequestPending(false);
    }
  };

  useEffect(() => {
    const timeSinceLastRequest = Date.now() - lastRequestTime;
    if (timeSinceLastRequest >= 1000) {
      fetchData();
    }
  }, [lastRequestTime]);

  return (
    <div>
      <h1>Rent List</h1>
      <ul>
        {/* Display a list of rental properties */}
        {rentalProperties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentList;
