import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RentList = () => {
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [rentalProperties, setRentalProperties] = useState([]);

  const fetchData = async () => {
    try {
      if (!isRequestPending) {
        setIsRequestPending(true);

        const response = await axios.get('https://bayut.p.rapidapi.com/properties', {
          headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'de41642316msh4c744048a6734eep100787jsn9bba0065b25f',
          },
          params: {
            purpose: 'for-rent',
          },
        });

        console.log('API Response:', response.data);

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
