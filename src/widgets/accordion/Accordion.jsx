import React, { useState } from "react";
import styled from "styled-components";
import { accordionData } from "../../utils/data";
import { AiFillPlusCircle } from "react-icons/ai";
function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (i) => {
    if (activeIndex === i) {
      setActiveIndex(null);
      return;
    } else {
      setActiveIndex(i);
    }
  };
  console.log(activeIndex);
  return (
    <Container>
      <h1>frequently asked question</h1>
      {accordionData.map((accordion, i) => (
        <div key={i} className={activeIndex === i ? "parent active" : "parent"}>
          <div className="head">
            <h2>{accordion.head}</h2>
            <AiFillPlusCircle
              size="2rem"
              cursor="pointer"
              onClick={() => toggleAccordion(i)}
            />
          </div>
          <div className="content">
            <p>{accordion.content}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Accordion;

const Container = styled.div`
  width: 90%;
  height: auto;
  margin-top: 10%;
  margin-left: 5%;
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 63px;
    text-transform: uppercase;
    color: #ffffff;
    font-family: var(--landing-font);
    margin-bottom: 8%;
  }
  .parent {
    @media (max-width: 768px) {
      height: 10vh;
    }
    width: 100%;
    height: 20vh;
    overflow-y: hidden;
    color: #fff;
    transition: all 0.5s linear;
    transform: rotate(3deg);
    margin-bottom: 5%;
    .head {
      @media (max-width: 768px) {
        height: 10vh;
      }
      background: #4c27ae;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0% 2%;
      height: 20vh;
      h2 {
        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        font-size: 1.8rem;
        font-family: var(--landing-font);
      }
    }
    .content {
      border: 2px solid #4c27ae;
      padding: 2%;
      transition: all 0.5s linear;
      p {
        @media (max-width: 768px) {
          font-size: 0.7rem;
        }
        font-size: 1.2rem;
        font-family: var(--landing-font);
        line-height: 30px;
      }
    }
  }
  .active {
    @media (max-width: 768px) {
      height: 70vh;
    }
    height: 60vh;

    transform: rotate(0deg);
  }
`;
