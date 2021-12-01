import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import { Mapa } from './styled'

let center = {
  lat: -30.036983,
  lng: -51.208895
};

const mapContainerStyle = {
    height: "100%",
    width: "97%"
  };

const MapPage = ({coords, ...props}) => {
  const [mapCoords, setMapCoords] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhJtiRsgFDP-q2rFn4bf_R8-fUvvaekq4",
  });

  useEffect (() => {
    setMapCoords(coords);
  }, [coords]);

  useEffect(() => {
    let aux = [];
    for (let coord in coords) {
        if (coords[coord].lat?.length > 0 && coords[coord].lng?.length > 0) {
          aux.push({ ...coords[coord] });
        }
    }
    setMapCoords(aux);
}, [coords]);

  const options = {
    strokeColor: '#ff0000',
    strokeWeight: 4,
    fillColor: '#ff0000',
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 100,
}

  return (
    <Mapa>
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={ mapContainerStyle }
          center={center}
          zoom={11}
        >
          {mapCoords?.map((marker, index) => {
                if (index === 0 || index === mapCoords.length - 1) {
                    if (index === -1) {
                        return <Marker key={"marker" + index} position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} options={{ visible: true }} />
                    } else {
                        return <Marker key={"marker" + index} position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} options={{ visible: true }} />
                    }
                } else {
                    return <Marker key={"marker" + index} position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} options={{ visible: false }} />
                }
            })}
            <Polyline key="polyline" path={mapCoords.map((x) => ({ lat: Number(x.lat), lng: Number(x.lng) }))} options={options} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Mapa>
  );
};

export default MapPage;
