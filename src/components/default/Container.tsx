import styled from "styled-components";

 const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 80vw;
  min-height: 100px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  border-radius: .25rem;

  @media screen and (max-width:1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Container;