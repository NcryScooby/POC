import { getCoords, getBus } from "../../service/tranporte.service";
import React, { useState, useEffect } from "react";

import { SubTitle, Select } from "../ui/style";

function ListOfBus({ list }) {
  const [postsBus, setPostsBus] = useState([]);
  const [postsJitneyBus, setPostsJitneyBus] = useState([]);
  const [optionsState, setOptionsState] = useState({});
  const [, setListCoordsState] = useState([]);
  const [isBus, setIsBus] = useState(true);

  useEffect(() => {
    getBus("o")
      .then((response) => {
        const bus = response.data;

        setPostsBus(bus);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);

  useEffect(() => {
    getBus("l")
      .then((response) => {
        const jitneyBus = response.data;

        setPostsJitneyBus(jitneyBus);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);

  async function functionGetCoords(bus) {
    const coords = await getCoords(bus);
    setListCoordsState([coords.data]);
    list(coords.data);
  }

  const changeBus = () => (isBus === true ? setIsBus(false) : setIsBus(true));

  return (
    <Select>
      <div>
        <SubTitle>Selecione Meio de Transporte</SubTitle>
        <select data-cy="options" onChange={() => changeBus()}>
          <option>Ônibus</option>
          <option>Lotação</option>
        </select>
        <div>
          {isBus === true ? (
            <>
              <SubTitle>Selecione a Rota do Ônibus</SubTitle>
              <select
                value={optionsState}
                onChange={(e) => {
                  setOptionsState(e.target.value);
                  return functionGetCoords(e.target.value);
                }}
              >
                {postsBus &&
                  postsBus.length &&
                  postsBus.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.nome}
                      </option>
                    );
                  })}
              </select>
            </>
          ) : (
            <>
              <SubTitle>Selecione a Rota da Lotação</SubTitle>
              <select
                value={optionsState}
                onChange={(e) => {
                  setOptionsState(e.target.value);
                  return functionGetCoords(e.target.value);
                }}
              >
                {postsJitneyBus &&
                  postsJitneyBus.length &&
                  postsJitneyBus.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.nome}
                      </option>
                    );
                  })}
              </select>
            </>
          )}
        </div>
      </div>
    </Select>
  );
}

export default ListOfBus;
