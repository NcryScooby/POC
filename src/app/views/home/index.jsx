import React, {useState} from "react";
import MapPage from "../../googleMaps/MapPage";
import ListOfBus from "../../listOfBus/ListOfBus";

import { Title } from './style'
function Home(props) {

  const [map, setMap] = useState([]);

  const getDados = (e) => {
    setMap(e);
  }


  return (
    <div className="home">
      <Title>POC React Estágio Dimed</Title>
      <ListOfBus listar={getDados} /> 
      <MapPage coords={map}/>
    </div>
  );
}

export default Home;
