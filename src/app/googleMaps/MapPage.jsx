import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import "./MapPage.css";

const MapPage = ({coords, ...props}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhJtiRsgFDP-q2rFn4bf_R8-fUvvaekq4",
  });

  const [mapCoords, setMapCoords] = useState([]);

  const onLoad = polyline => {
    console.log('polyline: ', polyline)
  };

  useEffect (() => {
    setMapCoords(coords);
    console.log('Filho: ', [coords]);
  }, [coords]);

  const path = [
    {lat: -30.00800957831400000, lng: -51.20927110780100000},
    {lat: -30.00693057831400000, lng: -51.20886410780100000},
    {lat: -30.00587257831400000, lng: -51.20846210780100000},
    {lat: -30.00427157831400000, lng: -51.20784310780100000},
    {lat: -30.00325957831400000, lng: -51.20746510780100000},
    {lat: -30.00243057831400000, lng: -51.20716010780100000},
    {lat: -30.00181557831400000, lng: -51.20694010780100000},
    {lat: -30.00172657831400000, lng: -51.20690910780100000},
    {lat: -30.00076257831400000, lng: -51.20657610780100000},
    {lat: -29.99977157831400000, lng: -51.20627310780100000},
    {lat: -29.99967157831400000, lng: -51.20623010780100000},
    {lat: -29.99932657831400000, lng: -51.20601210780100000},
    {lat: -29.99915557831400000, lng: -51.20576710780100000},
    {lat: -29.99898757831400000, lng: -51.20528210780100000},
    {lat: -29.99902457831400000, lng: -51.20365710780100000},
    {lat: -29.99903357831400000, lng: -51.20327210780100000},
    {lat: -29.99932257831400000, lng: -51.20217010780100000},
    {lat: -29.99951157831400000, lng: -51.20142010780100000},
    {lat: -29.99973457831400000, lng: -51.20036610780100000},
    {lat: -29.99984657831400000, lng: -51.19982710780100000},
    {lat: -30.00009157831400000, lng: -51.19866710780100000},
    {lat: -29.99882257831400000, lng: -51.19817110780100000},
    {lat: -29.99805057831400000, lng: -51.19787410780100000},
    {lat: -29.99792257831400000, lng: -51.19781210780100000},
  ];

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 1,
    strokeWeight: 3,
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
    width: "80%"
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
