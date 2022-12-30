import React from "react";
import styled from "styled-components";
import { lego2, lego3, lego4, star4 } from "../../assets/data";

function DesignedForBusiness() {
  return (
    <Container>
      {/* text */}
      <div className="text">
        <p>designed for businesses of all sizes</p>
      </div>
      {/* text */}

      {/* --------------------------------------------- */}

      {/* flex */}
      <div className="flex">
        <div className="left">
          <div className="star">
            <img src={star4} alt="" />
          </div>

          <div className="lego">
            <img src={lego2} alt="" />
          </div>

          <p>for small businesses</p>
        </div>

        <div className="right">
          <div className="right__one">
            <div className="img">
              <img src={lego3} alt="" />
            </div>

            <p>for startups</p>
          </div>
          <div className="right__two">
            <div className="img">
              <img src={lego4} alt="" />
            </div>

            <p>for enterprises</p>
          </div>
        </div>
      </div>
      {/* flex */}
    </Container>
  );
}

export default DesignedForBusiness;

const Container = styled.section`
  @media (max-width: 768px) {
    height: auto;
  }
  width: 100%;
  margin-top: 5%;
  height: 62rem;
  .text {
    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
    height: 7rem;
    width: 70%;
    padding: 3% 5%;
    p {
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
      font-family: var(--landing-font);
      font-size: 3rem;
      color: #fff;
    }
  }
  .flex {
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
    width: 100%;
    height: 50rem;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    .left {
      @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 10%;
      }
      width: 39%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 20px;
      background: #5631b8;
      overflow-x: hidden;
      .star {
        height: 36rem;
        width: 36rem;
        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }
      .lego {
        width: 30rem;
        height: 30rem;
        position: absolute;
        img {
          @media (max-width: 768px) {
            object-fit: contain !important;
            width: 100%;
            height: 100%;
          }
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }
      p {
        @media (max-width: 768px) {
          font-size: 1.3rem;
        }
        color: white;
        font-size: 2vw;
        text-transform: uppercase;
        font-family: var(--landing-font);
      }
    }
    .right {
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 15%;
        /* height: 100%; */
      }
      width: 59%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right__one {
        @media (max-width: 768px) {
          height: 20rem;
        }
        width: 48%;
        height: 100%;
        border: 5px dashed #4c27ae;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img {
          width: 100%;
          height: 55%;
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          color: white;
          font-size: 2vw;
          text-transform: uppercase;
          font-family: var(--landing-font);
        }
      }
      .right__two {
        @media (max-width: 768px) {
          height: 20rem;
        }
        width: 48%;
        height: 100%;
        border: 5px dashed #4c27ae;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img {
          width: 100%;
          height: 55%;
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1rem;
            text-align: center;
          }
          color: white;
          font-size: 2vw;
          text-transform: uppercase;
          font-family: var(--landing-font);
        }
      }
    }
  }
`;
