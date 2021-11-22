import './index.css'
import React from "react";
import MapPage from "../../googleMaps/MapPage";
import ListOfBus from "../../listOfBus/ListOfBus";

function Home() {
  return (
    <div className="home">
      <h1>POC React Estágio Dimed</h1>
      <ListOfBus />
      <MapPage />
    </div>
  );
}

export default Home;
