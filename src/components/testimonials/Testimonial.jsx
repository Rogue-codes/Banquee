import React from "react";
import styled from "styled-components";
import Slider from "../../widgets/slider/Slider";

function Testimonial() {
  return (
    <Container>
      {/* text */}
      <div className="text">
        <h2>trusted by People all over the world</h2>
      </div>
      {/* text */}

      {/* ------------------------------------------------------------ */}

      {/* slider */}
      <Slider />
      {/* slider */}
    </Container>
  );
}

export default Testimonial;

const Container = styled.section`
  @media (max-width: 768px) {
    margin-top: 15%;
  }
  width: 100%;
  min-height: 100vh;
  .text {
    h2 {
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      font-family: var(--landing-font);
      padding: 5% 2%;
      font-style: normal;
      font-weight: 900;
      color: #fff;
      font-size: 2.5rem;
      line-height: 50px;
      text-transform: uppercase;
    }
  }
`;
