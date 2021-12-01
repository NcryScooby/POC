import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #fff;
  font-size: 1.3em;

  /* Moto G4, Galaxy S5 */
  @media (min-height: 639px) and (max-height: 641px) {
    font-size: 1em;
  }

  /* Pixel 2 */
  @media (min-height: 730px) and (max-height: 732px) {
    font-size: 1.2em;
  }

  /* Pixel 2 XL*/
  @media (min-height: 822px) and (max-height: 824px) {
    font-size: 1.2em;
  }

  /* Iphone 5, SE */
  @media (min-height: 567px) and (max-height: 569px) {
    font-size: 0.9em;
  }

  /* Iphone 6, 7, 8 */
  @media (min-height: 666px) and (max-height: 668px) {
    font-size: 1.1em;
  }

  /* Iphone 6+, 7+, 8+ */
  @media (min-height: 735px) and (max-height: 737px) {
    font-size: 1.2em;
  }

  /* Iphone X */
  @media (min-height: 811px) and (max-height: 813px) {
    font-size: 1.1em;
  }

  /* Ipad */
  @media (min-height: 1023px) and (max-height: 1025px) {
    font-size: 1.8em;
  }

  /* Ipad pro*/
  @media (min-height: 1365px) and (max-height: 1367px) {
    font-size: 2em;
  }

  /* Surface Duo */
  @media (min-height: 719px) and (max-height: 721px) {
    font-size: 1.2em;
  }

  /* Galaxy Fold */
  @media (min-height: 652px) and (max-height: 654px) {
    font-size: 0.8em;
  }
`;
