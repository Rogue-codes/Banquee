import React, { useState } from "react";
import styled from "styled-components";
import { profile1, profile2, profile3, profile4 } from "../../assets/data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function Slider() {
  const slideData = [
    {
      header: "Super user-friendly",
      desc: "The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      img: profile1,
      name: "William Tromp",
      role: "CTO - Gislason and Sons",
    },
    {
      header: "Saved hours every week!",
      desc: "I have been saved so much time on tax calculations. And it gives me reliable projections.I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      img: profile2,
      name: "William Tromp",
      role: "CTO - Gislason and Sons",
    },
    {
      header: "Super user-friendly",
      desc: "The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      img: profile3,
      name: "Rebecca Emard",
      role: "Founder - Conn Inc ",
    },
    {
      header: "Super user-friendly",
      desc: "The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend.",
      img: profile4,
      name: "William Tromp",
      role: "Founder - Conn Inc",
    },
  ];
  const [activeCard, setActiveCard] = useState(0);

  const toggleSlide = (direction) => {
    if (direction === "left") {
      setActiveCard(activeCard > 0 ? activeCard - 1 : 1);
    } else if (direction === "right") {
      setActiveCard(activeCard < 1 ? activeCard + 1 : 0);
    }
  };

  return (
    <Container>
      <Slide>
        <Sliding slide={activeCard}>
          {slideData.map((slide, i) => (
            <Card>
              <h2>{slide.header}</h2>
              <p>{slide.desc}</p>
              <div className="flex">
                <div className="img">
                  <img src={slide.img} alt="" />
                </div>
                <div className="title">
                  <h2>{slide.name}</h2>
                  <p>{slide.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </Sliding>
      </Slide>
      <div className="navigate">
        <BsArrowLeft
          className={activeCard === 0 ? "left hide" : "left"}
          onClick={() => toggleSlide("left")}
        />
        <BsArrowRight
          className={activeCard === 1 ? "right hide" : "right"}
          onClick={() => toggleSlide("right")}
        />
      </div>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  @media (max-width: 768px) {
    height: 20rem;
  }
  width: 100%;
  height: 37rem;
  background: #ff9c20;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .left {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s linear;
    color: #fff;
  }
  .right {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.5s linear;
    color: #fff;
  }
  .hide {
    visibility: hidden;
  }
  .navigate {
    @media (max-width: 768px) {
      width: 40%;
      height: 6vh;
      bottom: 2%;
    }
    width: 20%;
    height: 10vh;
    border-radius: 20px;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 10%;
    bottom: 10%;
    background: #000;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: hidden;
`;

const Card = styled.div`
  @media (max-width: 768px) {
    height: auto;
    min-width: 20rem;
  }
  height: 18rem;
  width: 35rem;
  background: #fff;
  padding: 1%;
  border-radius: 20px;
  h2 {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    font-family: var(--landing-font);
    margin: 2%;
  }
  p {
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    font-family: var(--landing-font);
    margin: 2%;
    font-size: 1vw;
    line-height: 30px;
  }
  .flex {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    gap: 5%;
    padding: 2%;
    .img {
      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
      width: 78px;
      height: 78px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    h2 {
      @media (max-width: 768px) {
        font-size: 0.51rem;
      }
      font-size: 1.5vw;
      width: 100%;
    }
    p {
      @media (max-width: 768px) {
        font-size: 0.4rem;
      }
      width: 100%;
    }
  }
`;
const Sliding = styled.div`
  min-width: 200vw !important;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 2%;
  transition: all 0.5s linear;
  transform: translateX(${(props) => props.slide * -96}vw);
`;
