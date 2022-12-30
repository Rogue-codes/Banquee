import React from "react";
import styled from "styled-components";
import { star5 } from "../../assets/data";

function Newsletter() {
  return (
    <Container>
      <h2>subscribe to our newsletter for a 10% bonus on transactions</h2>
      <div className="input">
        <input type="text" name="" id="" placeholder="Your email address" />
        <button>subscribe</button>
      </div>
      <div className="star">
        <img src={star5} alt="" />
      </div>
    </Container>
  );
}

export default Newsletter;

const Container = styled.div`
  @media (max-width: 768px) {
    height: auto;
  }
  height: 25rem;
  width: 100%;
  padding: 5%;
  background: white;
  border-radius: 20px;
  position: relative;
  margin-top: 10%;
  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 30px;
    }
    font-family: var(--landing-font);
    font-style: normal;
    font-weight: 900;
    font-size: 2.1rem;
    width: 90%;
    line-height: 43px;
    text-transform: uppercase;
    color: #000000;
  }
  .input {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5%;
    input {
      @media (max-width: 768px) {
        width: 100%;
        border-radius: 22px;
        height: 4rem;
        font-size: 1rem;
      }
      height: 6rem;
      width: 80%;
      border-radius: 50px;
      border: none;
      background: lightgrey;
      padding: 2% 5%;
      font-size: 1.75rem;
    }
    button {
      @media (max-width: 768px) {
        border-radius: 22px;
        height: 3rem;
        margin-left: -35%;
        width: 30%;
      }
      height: 5rem;
      width: 20%;
      border-radius: 50px;
      margin-left: -21%;
      color: #fff;
      background: #000;
      font-size: 1rem;
      cursor: pointer;
    }
  }
  .star {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 5%;
    top: 5%;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
`;
