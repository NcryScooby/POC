import "./ListOfBus.css";
import axios from "axios";

import React, {useState, useEffect} from "react";

function ListOfBus() {


  const [postsOnibus, setPostsOnibus] = useState([]);
  const [postsLotacao, setPostsLotacao] = useState([]);
  const [optionsState, setOptionsState] = useState({});
  const [isBus, setIsBus] = useState(true);

  useEffect(() => {
    axios
      .get(
        "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o"
      )
      .then((response) => {
        const onibus = response.data;

        setPostsOnibus(onibus);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);


  useEffect(() => {
    axios
      .get(
        "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l" 
      )
      .then((response) => {
        const lotacao = response.data;

        setPostsLotacao(lotacao);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);

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
        <h2 className="title-sel">Selecione</h2>
        <select onChange={() => altera()}>
          <option>Ônibus</option>
          <option>Lotação</option>
        </select>
        <div>
          {isBus === true ? 
          <> 
          <h2 className="title">Ônibus</h2>
          <select 
          value={optionsState} 
          onChange={(e) => setOptionsState(console.log(e.target.value))}>
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
          <h2 className="title">Lotação</h2>
          <select 
          value={optionsState} 
          onChange={(e) => setOptionsState(console.log(e.target.value))}>
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
