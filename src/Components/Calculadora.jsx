import styled from "styled-components";

export const Calculadora = styled.div`
  align-items: center;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
export const DivDisplay = styled.div`
  background-color: #514f4f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 50vw;
  }
`;

export const ContainerCalculadora = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e90ede97;
  @media (max-width: 500px) {
    background: rgb(58, 34, 195);
    background: linear-gradient(
      0deg,
      rgba(58, 34, 195, 1) 0%,
      rgba(253, 45, 210, 1) 81%
    );
  }
`;

export const Main = styled.main`
  background-color: silver;
  border: 3px solid #514f4f;
  border-radius: 32px;
  padding: 18px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: #490342;
  margin: 10px;
  @media (max-width: 500px){
    font-size: 50px;
    margin: 20px;
    color: #fff;
  }
`;
