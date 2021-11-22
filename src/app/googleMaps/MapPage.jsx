import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhJtiRsgFDP-q2rFn4bf_R8-fUvvaekq4",
  });

  const position = {
    lat: -30.036983,
    lng: -51.208895,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "50%", height: "100%" }}
          center={position}
          zoom={13}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
