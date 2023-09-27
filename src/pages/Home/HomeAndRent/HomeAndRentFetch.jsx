import React, { useState, useEffect } from "react";
import axios from 'axios';


const HomeAndRentFetch = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getProperties() {
      const options = {
        method: "GET",
        url: "https://bayut.p.rapidapi.com/properties/list",
        params: {
          locationExternalIDs: "5002,6020",
          purpose: "for-rent",
          hitsPerPage: "25",
          page: "0",
          lang: "en",
          sort: "city-level-score",
          rentFrequency: "monthly",
          categoryExternalID: "4",
        },
        headers: {
          "X-RapidAPI-Key":
            "a190202405mshc29e6d75addab9bp1d8b1fjsnd598e9d5c666",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProperties();

    return () => {};
  }, []);

  useEffect(() => {
    console.log(properties);

    return () => {};
  }, [properties]);
};

export default HomeAndRentFetch;
