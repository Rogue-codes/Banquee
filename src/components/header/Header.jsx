import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { star1 } from "../../assets/data";
import { motion } from "framer-motion";
function Header() {
  return (
    <Container>
      <div className="content">
        <motion.button
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ delay: 6, duration: 1, type: "spring", stiffness: 120 }}
        >
          {/* <img src={star1} alt="" height="50" width="50" /> */}
          <span>BANQUEE</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <GiHamburgerMenu size="2rem" color="#ED7E02" />
        </motion.div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: flex-end;
  .content {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    button {
      @media (max-width: 768px) {
        width: 80%;
        justify-content: flex-start;
        padding: 2%;
      }
      width: 40%;
      height: 10vh;
      background: #000;
      border-radius: 38px;
      border: none;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5%;
      span {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        font-size: 2vw;
        font-weight: 800;
      }
    }
  }
`;
