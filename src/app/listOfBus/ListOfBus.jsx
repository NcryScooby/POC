import "./ListOfBus.css";
import axios from "axios";

import React, {useState, useEffect} from "react";

function ListOfBus() {


  const [postsOnibus, setPostsOnibus] = useState([]);
  const [postsLotacao, setPostsLotacao] = useState([]);

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

  return (
    <div className="custom-select">
      <div>
        <div>
          <h2>Ônibus</h2>
          <select name="">
          {postsOnibus &&
          postsOnibus.length &&
          postsOnibus.map((item, index) => {
            return (
                <option key={index} value="">{item.nome}</option>
            );
          })}
          
          </select>
        </div>
      </div>
      <div>
        <div>
        <h2>Lotação</h2>
          <select name="">
          {postsLotacao &&
          postsLotacao.length &&
          postsLotacao.map((item, index) => {
            return (
                <option key={index} value="">{item.nome}</option>
            );
          })}
          
          </select>
        </div>
      </div>
    </div>
  );
}

export default ListOfBus;
