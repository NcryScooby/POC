import React, { useState } from "react";
import MapPage from "../../googleMaps/MapPage";
import ListOfBus from "../../listOfBus/ListOfBus";

import { Title } from "../../ui/style";

function Home() {
  const [map, setMap] = useState([]);

  const getData = (e) => {
    setMap(e);
  };

  return (
    <div className="Home">
      <Title>POC React Estágio Dimed</Title>
      <ListOfBus list={getData} />
      <MapPage coords={map} />
    </div>
  );
}

export default Home;
