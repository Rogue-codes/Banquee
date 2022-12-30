import React from "react";
import styled from "styled-components";
import { bank, star3 } from "../../assets/data";
import DigiBtn from "./DigiBtn";

function Digital() {
  return (
    <Container>
      {/* left */}
      <div className="left">
        <img src={bank} alt="" />
      </div>
      {/* left */}

      {/* ------------------------------------------------------------- */}

      {/* right */}
      <div className="right">
        <h2>Go digital now!</h2>

        <p>
          Our digital platform allows you to access your money from anywhere,
          anytime. Which our innovative security features, and first-in-class
          service, we combine the best of traditional banking with a modern
          convenience of digital banking today
        </p>

        <DigiBtn content="GET STARTED" />
      </div>
      {/* right */}

      {/* star */}
      <div className="star">
        <img src={star3} alt="" />
      </div>
      {/* star */}
    </Container>
  );
}

export default Digital;

const Container = styled.section`
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 5%;
  }
  width: 100%;
  height: 37rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2%;
  align-items: center;
  overflow-y: hidden;
  .left {
    @media (max-width: 768px) {
      width: 100%;
      height: 25rem;
    }
    width: 29rem;
    height: 29rem;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  .right {
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    width: 54rem;
    height: 23rem;
    h2 {
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      margin: 2%;
      font-size: 3vw;
      text-transform: uppercase;
      font-family: var(--landing-font);
    }
    p {
      @media (max-width: 768px) {
        font-size: 1rem;
        position: relative;
        z-index: 2;
        line-height: 40px;
      }
      margin: 2%;
      font-size: 1.2vw;
      text-transform: uppercase;
      font-family: var(--landing-font);
      line-height: 30px;
    }
  }
  .star {
    width: 27rem;
    height: 27rem;
    position: absolute;
    right: 0;
    bottom: -25%;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
`;
