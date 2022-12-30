import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { heroimage, star1, star2 } from "../../assets/data";
import Header from "../header/Header";
import Button from "./Button";
function Landing() {
  const variants = {
    open: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
    closed: { opacity: 0 },
  };
  return (
    <Container initial="closed" animate="open" variants={variants}>
      <Header />
      {/* large text */}
      <motion.div
        className="TextBg"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, type: "spring", stiffness: 120 }}
      >
        <h1>EASY WAY TO BANKING</h1>
      </motion.div>
      {/* large text */}
      {/* ------------------------------------------------------------------------------ */}

      {/* small text */}
      <motion.div
        className="TextSm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1, type: "spring", stiffness: 120 }}
      >
        <p>
          We give you both the foundation and flexibility to build and grow
          digital capabilities and deliver customer experiences.
        </p>
      </motion.div>
      {/* small text */}
      {/* ------------------------------------------------------------------------------ */}
      {/* //star image */}
      <motion.div
        className="star"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6, duration: 1 }}
      >
        <img src={star2} alt="" />
      </motion.div>
      <motion.div
        className="star2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        {/* <img src={star1} alt="" /> */}
      </motion.div>
      {/* //star image */}
      {/* ------------------------------------------------------------------------------ */}
      {/* lego image */}
      <motion.div
        className="lego"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ delay: 4, duration: 1.5, type: "spring", stiffness: 120 }}
      >
        <img src={heroimage} alt="" />
      </motion.div>
      {/* lego image */}
      {/* ------------------------------------------------------------------------------ */}

      {/* button */}
      <Button content="GET STARTED" />
      {/* button */}
    </Container>
  );
}

export default Landing;

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    height: 200vh;
  }
  width: 100%;
  height: 120vh;
  background: #4c27ae;
  border-radius: 12px;
  position: relative;
  .star {
    @media (max-width: 768px) {
      width: 20rem;
      height: 20rem;
      top: 15%;
    }
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: 18%;
    left: 5%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .star2 {
    @media (max-width: 768px) {
      width: 20rem;
      height: 20rem;
      left: 2%;
      top: 65%;
    }
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: 85%;
    left: 85%;
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .TextBg {
    @media (max-width: 768px) {
      left: 2%;
      top: 15%;
    }
    width: 80%;
    height: auto;
    position: absolute;
    top: 23%;
    left: 7%;
    z-index: 9;
    display: flex;
    align-items: center;
    padding: 2%;
    h1 {
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      font-family: var(--landing-font);
      letter-spacing: 5px;
      font-weight: 800;
      font-size: 5.6rem;
      color: #fff;
    }
  }
  .TextSm {
    @media (max-width: 768px) {
      width: 100%;
      left: 2%;
      top: 34%;
      z-index: 3;
    }
    padding: 3% 2%;
    width: 55%;
    height: 15%;
    position: absolute;
    top: 52%;
    left: 7%;
    p {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
      font-family: var(--landing-font);
      font-size: 1.4rem;
      color: #fff;
      line-height: 30px;
    }
  }
  .lego {
    @media (max-width: 768px) {
      width: 100%;
      left: 2%;
      top: 60%;
    }
    width: 35%;
    height: 70vh;
    position: absolute;
    left: 65%;
    top: 55%;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
