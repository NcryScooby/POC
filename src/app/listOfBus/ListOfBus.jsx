import "./ListOfBus.css";
import { getCoords, getOnibus } from '../../service/tranporte.service'

import styled from "styled-components";

import React, {useState, useEffect} from "react";

const Title = styled.h2`
  color: white;
  font-size: 1.2rem;
`

function ListOfBus({listar, ...props}) {


  const [postsOnibus, setPostsOnibus] = useState([]);
  const [postsLotacao, setPostsLotacao] = useState([]);
  const [optionsState, setOptionsState] = useState({});
  const [/*listaCoordsState*/, setListaCoordsState] = useState([]);
  const [isBus, setIsBus] = useState(true);

  useEffect(() => {
    getOnibus('o')
      .then((response) => {
        const onibus = response.data;

        setPostsOnibus(onibus);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);


  useEffect(() => {
    getOnibus('l')
      .then((response) => {
        const lotacao = response.data;

        setPostsLotacao(lotacao);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);

  async function functionGetCoords(bus) {
    const coords = await getCoords(bus);
    setListaCoordsState([coords.data]);
    // setMap(coords.data)
    // console
    listar(coords.data);
    //console.log(listar)
    // props.children.setMap(coords.data)
    // return getCoords(bus);
  }
  
  function altera() {

    if (isBus === true) {
      setIsBus(false);
    } else {
      setIsBus(true);
    }
  }

  return (
    <div className="custom-select">
      <div>
        <Title className="title-sel">Selecione Meio de Transporte</Title>
        <select onChange={() => altera()}>
          <option>Ônibus</option>
          <option>Lotação</option>
        </select>
        <div>
          {isBus === true ? 
          <> 
          <Title className="title">Selecione a Rota do Ônibus</Title>
          <select 
          value={optionsState}
          onChange={(e) => {
            setOptionsState((e.target.value));
            return functionGetCoords(e.target.value);
          }}>
          {postsOnibus &&
          postsOnibus.length &&
          postsOnibus.map((item, index) => {
            return (
                <option 
                key={index} value={item.id}>{item.codigo} | {item.nome}</option>
            );
          })}
          </select>
          </> 
          : 
          <> 
          <Title className="title">Selecione a Rota da Lotação</Title>
          <select 
          value={optionsState} 
          onChange={(e) => {
          setOptionsState((e.target.value))
          return functionGetCoords(e.target.value);
          }}>
          {postsLotacao &&
          postsLotacao.length &&
          postsLotacao.map((item, index) => {
            return (
                <option 
                key={index} value={item.id}>{item.codigo} | {item.nome}</option>
            );
          })}
          </select>
          </>}
        </div>
      </div>
    </div>
  );
}

export default ListOfBus;
