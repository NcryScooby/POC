import styled from "styled-components";

export const Mapa = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;

  /* Moto G4, Galaxy S5 */
  @media (min-height: 639px) and (max-height: 641px) {
    height: 58vh;
  }

  /* Pixel 2 */
  @media (min-height: 730px) and (max-height: 732px) {
    height: 61vh;
  }

  /* Pixel 2 XL*/
  @media (min-height: 822px) and (max-height: 824px) {
    height: 65vh;
  }

  /* Iphone 5, SE */
  @media (min-height: 567px) and (max-height: 569px) {
    height: 54vh;
  }

  /* Iphone 6, 7, 8 */
  @media (min-height: 666px) and (max-height: 668px) {
    height: 58vh;
  }

  /* Iphone 6+, 7+, 8+ */
  @media (min-height: 735px) and (max-height: 737px) {
    height: 61vh;
  }

  /* Iphone X */
  @media (min-height: 811px) and (max-height: 813px) {
    height: 66vh;
  }

  /* Ipad */
  @media (min-height: 1023px) and (max-height: 1025px) {
    height: 68vh;
  }

  /* Ipad pro*/
  @media (min-height: 1365px) and (max-height: 1367px) {
    height: 75vh;
  }

  /* Surface Duo */
  @media (min-height: 719px) and (max-height: 721px) {
    height: 60vh;
  }

  /* Galaxy Fold */
  @media (min-height: 652px) and (max-height: 654px) {
    height: 61vh;
  }
`;
