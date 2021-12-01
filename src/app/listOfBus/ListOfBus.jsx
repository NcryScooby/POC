import { getCoords, getOnibus } from '../../service/tranporte.service'
import React, {useState, useEffect} from "react";

import { SubTitle, Select } from '../ui/style'



function ListOfBus({listar, ...props}) {


  const [postsOnibus, setPostsOnibus] = useState([]);
  const [postsLotacao, setPostsLotacao] = useState([]);
  const [optionsState, setOptionsState] = useState({});
  const [ , setListaCoordsState] = useState([]);
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
    listar(coords.data);
  }
  
  function altera() {

    if (isBus === true) {
      setIsBus(false);
    } else {
      setIsBus(true);
    }
  }

  return (
    <Select>
      <div>
        <SubTitle>Selecione Meio de Transporte</SubTitle>
        <select data-cy="opcoes" onChange={() => altera()}>
          <option>Ônibus</option>
          <option>Lotação</option>
        </select>
        <div>
          {isBus === true ?
          <> 
          <SubTitle>Selecione a Rota do Ônibus</SubTitle>
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
                key={index} value={item.id}>{item.nome}</option>
            );
          })}
          </select>
          </> 
          : 
          <> 
          <SubTitle>Selecione a Rota da Lotação</SubTitle>
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
                key={index} value={item.id}>{item.nome}</option>
            );
          })}
          </select>
          </>}
        </div>
      </div>
    </Select>
  );
}

export default ListOfBus;
