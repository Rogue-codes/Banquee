import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Button({ content }) {
  return (
    <Container
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4, duration: 1 }}
    >
      {content}
    </Container>
  );
}

export default Button;

const Container = styled(motion.button)`
  @media (max-width: 768px) {
    width: 80%;
    top: 52%;
    font-size: 1rem;
    left: 2%;
  }
  width: 20%;
  height: 10vh;
  border-radius: 28px;
  border: none;
  position: absolute;
  font-size: 1.5vw;
  cursor: pointer;
  top: 80%;
  left: 8%;
  background: #ed7e02;
  font-weight: 800;
  transition: all 0.5s linear;
  &:hover {
    transition: all 0.5s linear;
    transform: scale(1.2) !important;
  }
`;
