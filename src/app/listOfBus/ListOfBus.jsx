import "./ListOfBus.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ListOfBus() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o"
      )
      .then((response) => {
        const qualquer = response.data;

        setPosts(qualquer);
      })
      .catch(() => {
        console.log("Deu tudo Errado!");
      });
  }, []);

  return (
    <div className="lis">
      <div>
        {posts &&
          posts.length &&
          posts.map((item, index) => {
            console.log(typeof item);
            return (
              <div key={index}>
                <ul>
                  <li>{item.codigo}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListOfBus;
