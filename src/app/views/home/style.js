import styled from 'styled-components'

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #fff;

    @media (max-width: 600px) and (min-width: 300px) {
        font-size: 1.5em;
    }

  @media (max-width: 299px) and (min-width: 100px) {
        font-size: 1em;
    }

  @media (max-width: 360px) and (min-width: 100px) {
        font-size: 1.2em;
    }

  @media (max-width: 766px) and (min-width: 601px) {
        font-size: 1.5em;
  }

  @media (min-width: 767px) {
        font-size: 1.8em;
  }
`