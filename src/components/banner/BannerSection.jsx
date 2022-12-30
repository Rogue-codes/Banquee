import React from "react";
import styled from "styled-components";
import { banner } from "../../assets/data";

function BannerSection() {
  return (
    <Container>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </Container>
  );
}

export default BannerSection;
const Container = styled.section`
  @media (max-width: 768px) {
    height: 5rem;
  }
  width: 100%;
  height: 10rem;
  background: #fff;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 80%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
