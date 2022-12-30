import React from "react";
import styled from "styled-components";

function DigiBtn({content}) {
  return <Container>
    {content}
  </Container>;
}

export default DigiBtn;

const Container = styled.button`
@media (max-width: 768px) {
  position: relative;
  z-index: 2;
  width: 80%;
  font-size: 1rem;
  margin-top: 5%;
}
  width: 40%;
  height: 10vh;
  border-radius: 28px;
  background: #ed7e02;
  font-weight: 800;
  font-size: 1.5vw;
  cursor: pointer;
  margin: 2%;
  border: none;
  transition: all 0.5s linear;
  &:hover {
    transition: all 0.5s linear;
    transform: scale(1.2) !important;
  }
`;
