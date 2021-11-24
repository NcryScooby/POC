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

  useEffect(() => {
    for (let coord in coords) {
        if (coords[coord].lat?.length > 0 && coords[coord].lng?.length > 0) {
          mapCoords.push({ ...coords[coord] });
        }
    }
    setMapCoords(mapCoords);
}, [coords]);

  const options = {
    strokeColor: '#3f3fb8',
    strokeWeight: 4,
    fillColor: '#3f3fb8',
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 100,
}

  let position = {
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
          {mapCoords?.map((marker, index) => {
                if (index === 0 || index === mapCoords.length - 1) {
                    if (index === -1) {
                        return <Marker key={"marker" + index} position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} options={{ visible: true }} />
                    } else {
                        const centerOfLine = (index / 2);
                        const { lat, lng } = mapCoords[parseInt(centerOfLine.toString())];
                        position = { lat:(lat), lng:(lng) };

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
    </div>
  );
};

export default MapPage;
