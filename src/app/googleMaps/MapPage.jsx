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
    console.log('Filho: ', coords)
  }, [coords])
  

  
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
    paths: mapCoords,
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
          paths={mapCoords}
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
