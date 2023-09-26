import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 12, 
      });

    
      window.addEventListener("resize", () => {
        window.google.maps.event.trigger(map, "resize");
      });
    };

    document.head.appendChild(script);

    return () => {
    
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default GoogleMap;
