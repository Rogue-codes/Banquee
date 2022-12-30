import React from "react";
import styled from "styled-components";
import { mobile } from "../../assets/data";

function Banking() {
  return (
    <Container>
      {/* text */}
      <div className="text">
        <h2>We take banking personally</h2>
      </div>
      {/* text */}

      {/* ------------------------------------------------------------------ */}

      {/* flex */}
      <div className="flex">
        <div className="left">
          <div className="card">
            <h2>save</h2>
            <p>
              We’re using technology to solve that by automating saving. You set
              an amount to save and we takes care of the rest, prompt interest
              payout included.
            </p>
          </div>

          <div className="card">
            <h2>spend</h2>
            <p>
              We give you more than one way to pay easily, including a widely
              accepted debit card issued in partnership with Visa, quick web
              payments direct from your account.
            </p>
          </div>

          <div className="card">
            <h2>send</h2>
            <p>
              From international transfers to on-the-spot payments at market
              stalls, we’ve simplified sending money so you don’t need to think
              too much about it.
            </p>
          </div>
        </div>

        <div className="right">
          <img src={mobile} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Banking;

const Container = styled.section`
  @media (max-width: 768px) {
    height: auto;
    margin-top: 15%;
  }
  width: 100%;
  height: 53rem;
  .text {
    width: 100%;
    height: 15%;
    h2 {
      font-family: var(--landing-font);
      color: #fff;
      font-style: normal;
      font-weight: 900;
      font-size: 3rem;
      line-height: 63px;
      padding: 2%;
    }
  }
  .flex {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-between;
    .left {
      @media (max-width: 768px) {
        width: 100%;
      }
      width: 50%;
      height: 100%;
      .card {
        width: 100%;
        height: 30%;
        margin-top: 2%;
        color: #fff;
        padding: 2%;
        h2 {
          font-style: normal;
          font-weight: 900;
          font-size: 1.85rem;
          line-height: 38px;
          text-transform: uppercase;
          font-family: var(--landing-font);
        }
        p {
          font-family: var(--landing-font);
          font-size: 1.25rem;
          margin-top: 5%;
        }
      }
    }
    .right {
      @media (max-width: 768px) {
        width: 100%;
      }
      width: 50%;
      height: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
`;
