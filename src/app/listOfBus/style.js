import styled from "styled-components";

export const Title = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Select = styled.div`
  padding-bottom: 30px;

  select {
    text-align: center;
    width: 22%;
    height: 35px;
    color: black;
    background-color: rgb(223, 223, 223);
    font-size: 18px;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media (min-width: 601px) and (max-width: 766px) {
    select {
      width: 80%;
    }
  }

  @media (min-width: 100px) and (max-width: 600px) {
    select {
      width: 95%;
      font-size: 15px;
      height: 35px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1365px) {
    select {
      width: 65%;
    }
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    select {
      width: 80%;
    }
  }
`;
