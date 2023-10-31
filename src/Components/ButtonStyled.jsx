import styled from "styled-components"

export const Button = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; 

   @media (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px; 
    width: 50vw;
    
   }  
`;

export const DivBotao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding: 18px;
    margin: 10px;
    width: 20vw;
    @media (max-width: 500px){
    display: flex;
    flex-direction: column;
    gap: 30px; 
    margin: 60px;
    width: 30vw;
    align-items: center;
    }
`;





