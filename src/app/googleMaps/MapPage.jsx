import React from "react";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhJtiRsgFDP-q2rFn4bf_R8-fUvvaekq4",
  });

  const onLoad = polyline => {
    console.log('polyline: ', polyline)
  };
  
  const path = [
    // Aqui vai as coords.
  ];

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [path],
    zIndex: 1
  };

  const position = {
    lat: -30.036983,
    lng: -51.208895,
  };

  const mapContainerStyle = {
    height: "100%",
    width: "50%"
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={ mapContainerStyle }
          center={position}
          zoom={13}
        >
          <Polyline
          onLoad={onLoad}
          path={path}
          options={options}
    />
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
