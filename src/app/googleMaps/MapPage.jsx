import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import { Map } from "../ui/style";

const mapContainerStyle = {
  height: "100%",
  width: "97%",
};

const MapPage = ({ coords }) => {
  const [center, setCenter] = useState({
    lat: -30.036983,
    lng: -51.208895,
  });

  const [mapCoords, setMapCoords] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBhJtiRsgFDP-q2rFn4bf_R8-fUvvaekq4",
  });

  useEffect(() => {
    let helpper = [];
    for (let coord in coords) {
      if (coords[coord].lat?.length > 0 && coords[coord].lng?.length > 0) {
        helpper.push({ ...coords[coord] });
      }
    }
    setMapCoords(helpper);
  }, [coords]);

  useEffect(() => {
    if (mapCoords.length > 0) {
      const centerOfLine = mapCoords.length / 2;
      const { lat, lng } = mapCoords[parseInt(centerOfLine.toString())];
      setCenter({ lat: Number(lat), lng: Number(lng) });
    }
  }, [mapCoords]);

  const options = {
    strokeColor: "#fd5454",
    strokeWeight: 4,
    fillColor: "#fd5454",
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 100,
  };

  return (
    <Map>
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={11.5}
        >
          {mapCoords?.map((marker, index) => {
            if (index === 0 || index === mapCoords.length - 1) {
              if (index === -1) {
                return (
                  <Marker
                    key={"marker" + index}
                    position={{
                      lat: Number(marker.lat),
                      lng: Number(marker.lng),
                    }}
                    options={{ visible: true }}
                  />
                );
              } else {
                return (
                  <Marker
                    key={"marker" + index}
                    position={{
                      lat: Number(marker.lat),
                      lng: Number(marker.lng),
                    }}
                    options={{ visible: true }}
                  />
                );
              }
            } else {
              return (
                <Marker
                  key={"marker" + index}
                  position={{
                    lat: Number(marker.lat),
                    lng: Number(marker.lng),
                  }}
                  options={{ visible: false }}
                />
              );
            }
          })}
          <Polyline
            key="polyline"
            path={mapCoords.map((x) => ({
              lat: Number(x.lat),
              lng: Number(x.lng),
            }))}
            options={options}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Map>
  );
};

export default MapPage;
