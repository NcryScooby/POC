import styled from "styled-components";

export const SubTitle = styled.h2`
  color: #ccc;
  font-weight: 600;
  font-size: 0.8rem;
  font-family: 'Montserrat', sans-serif;
`;

export const Select = styled.div`
  padding-bottom: 30px;

  select {
    text-align: center;
    width: 22%;
    height: 35px;
    color: black;
    background-color: rgb(223, 223, 223);
    font-size: 14px;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #fff;
  font-size: 1.3em;

  /* Moto G4, Galaxy S5 */
  @media (min-height: 639px) and (max-height: 641px) {
    font-size: 0.91em;
  }

  /* Pixel 2 */
  @media (min-height: 730px) and (max-height: 732px) {
    font-size: 1.04em;
  }

  /* Pixel 2 XL*/
  @media (min-height: 822px) and (max-height: 824px) {
    font-size: 1.04em;
  }

  /* Iphone 5, SE */
  @media (min-height: 567px) and (max-height: 569px) {
    font-size: 0.8em;
  }

  /* Iphone 6, 7, 8 */
  @media (min-height: 666px) and (max-height: 668px) {
    font-size: 0.95em;
  }

  /* Iphone 6+, 7+, 8+ */
  @media (min-height: 735px) and (max-height: 737px) {
    font-size: 1.05em;
  }

  /* Iphone X */
  @media (min-height: 811px) and (max-height: 813px) {
    font-size: 0.95em;
  }

  /* Ipad */
  @media (min-height: 1023px) and (max-height: 1025px) {
    font-size: 1.99em;
  }

  /* Ipad pro*/
  @media (min-height: 1365px) and (max-height: 1367px) {
    font-size: 2.67em;
  }

  /* Surface Duo */
  @media (min-height: 719px) and (max-height: 721px) {
    font-size: 1.38em;
  }

  /* Galaxy Fold */
  @media (min-height: 652px) and (max-height: 654px) {
    font-size: 0.69em;
  }
`;

export const Map = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;

  /* Moto G4, Galaxy S5 */
  @media (min-height: 639px) and (max-height: 641px) {
    height: 59vh;
  }

  /* Pixel 2 */
  @media (min-height: 730px) and (max-height: 732px) {
    height: 63vh;
  }

  /* Pixel 2 XL*/
  @media (min-height: 822px) and (max-height: 824px) {
    height: 67vh;
  }

  /* Iphone 5, SE */
  @media (min-height: 567px) and (max-height: 569px) {
    height: 55vh;
  }

  /* Iphone 6, 7, 8 */
  @media (min-height: 666px) and (max-height: 668px) {
    height: 60vh;
  }

  /* Iphone 6+, 7+, 8+ */
  @media (min-height: 735px) and (max-height: 737px) {
    height: 62vh;
  }

  /* Iphone X */
  @media (min-height: 811px) and (max-height: 813px) {
    height: 67vh;
  }

  /* Ipad */
  @media (min-height: 1023px) and (max-height: 1025px) {
    height: 66vh;
  }

  /* Ipad pro*/
  @media (min-height: 1365px) and (max-height: 1367px) {
    height: 71vh;
  }

  /* Surface Duo */
  @media (min-height: 719px) and (max-height: 721px) {
    height: 58vh;
  }

  /* Galaxy Fold */
  @media (min-height: 652px) and (max-height: 654px) {
    height: 62vh;
  }
`;