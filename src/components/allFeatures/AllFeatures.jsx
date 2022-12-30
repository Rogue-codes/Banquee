import React from "react";
import styled from "styled-components";
import { bill, card, fees, secure } from "../../assets/data";

function AllFeatures() {
  return (
    <Container>
      {/* text */}
      <div className="text">
        <h2>all features you need in one plaCE</h2>
      </div>
      {/* text */}
      {/* ---------------------------------------------------------------------------- */}

      {/* flex */}
      <div className="flex">
        {/* top */}
        <div className="top">
          <div className="top__left">
            <div className="image">
              <img src={secure} alt="" />
            </div>
            <p>Secure Online Banking</p>
          </div>

          <div className="top__right">
            <div className="image">
              <img src={bill} alt="" />
            </div>
            <p>Automatic Bill Payment</p>
          </div>
        </div>
        {/* top */}

        {/* ---------------------------------------------------------------------------- */}

        {/* bottom */}
        <div className="bottom">
          <div className="bottom__left">
            <div className="image">
              <img src={fees} alt="" />
            </div>
            <p>No Hidden Fees</p>
          </div>
          <div className="bottom__right">
            <div className="image">
              <img src={card} alt="" />
            </div>
            <p>Card Payments Anytime</p>
          </div>
        </div>
        {/* bottom */}
      </div>
      {/* flex */}
    </Container>
  );
}

export default AllFeatures;

const Container = styled.section`
  @media (max-width: 768px) {
    height: auto;
  }
  margin-top: 5%;
  width: 100%;
  height: 65rem;
  .text {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 75%;
    height: 15%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    padding: 2% 5%;
    h2 {
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      font-size: 3rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #fff;
      font-family: "Montserrat", sans-serif;
    }
  }
  .flex {
    width: 100%;
    height: 70%;
    .top {
      @media (max-width: 768px) {
        flex-direction: column;
      }
      width: 100%;
      height: 48%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
      .top__left {
        @media (max-width: 768px) {
          width: 100%;
        }
        width: 65%;
        height: 100%;
        border-radius: 20px;
        border: 5px dashed #5631b8;
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: center;
        gap: 5%;
        .image {
          width: 12.5rem;
          height: 12.5rem;
          img {
            @media (max-width: 768px) {
              object-fit: contain;
            }
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
          color: #fff;
          font-size: 2.5vw;
          font-family: var(--landing-font);
        }
      }
      .top__right {
        @media (max-width: 768px) {
          width: 100%;
          margin-top: 5%;
          padding-bottom: 5%;
        }
        width: 30%;
        height: 100%;
        border-radius: 20px;
        background: #ed7e02;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .image {
          width: 12.5rem;
          height: 12.5rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
          color: #fff;
          font-size: 2vw;
          font-family: var(--landing-font);
        }
      }
    }
    .bottom {
      @media (max-width: 768px) {
        flex-direction: column;
      }
      width: 100%;
      height: 48%;
      margin-top: 2%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
      .bottom__left {
        @media (max-width: 768px) {
          width: 100%;
          padding-bottom: 5%;
        }
        width: 30%;
        height: 100%;
        border-radius: 20px;
        background: #ed7e02;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .image {
          width: 12.5rem;
          height: 12.5rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
          color: #fff;
          font-size: 2vw;
          font-family: var(--landing-font);
        }
      }
      .bottom__right {
        @media (max-width: 768px) {
          margin-top: 5%;
          width: 100%;
        }
        width: 65%;
        height: 100%;
        border-radius: 20px;
        border: 5px dashed #5631b8;
        display: flex;
        justify-content: center;
        gap: 5%;
        align-items: center;
        gap: 5%;
        .image {
          width: 12.5rem;
          height: 12.5rem;
          img {
            @media (max-width: 768px) {
              object-fit: contain;
            }
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        p {
          @media (max-width: 768px) {
            font-size: 1rem;
          }
          color: #fff;
          font-size: 2.5vw;
          font-family: var(--landing-font);
        }
      }
    }
  }
`;
