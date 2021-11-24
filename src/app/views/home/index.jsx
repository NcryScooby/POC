import './index.css'
import React, {useState} from "react";
import MapPage from "../../googleMaps/MapPage";
import ListOfBus from "../../listOfBus/ListOfBus";

function Home(props) {

  const [map, setMap] = useState([]);

  const getDados = (e) => {
    setMap(e);
  }


  return (
    <div className="home">
      <h1>POC React Estágio Dimed</h1>
      <ListOfBus listar={getDados} /> 
      <MapPage coords={map}/>
    </div>
  );
}

export default Home;
