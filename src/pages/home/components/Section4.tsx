import badge from "assets/badge.png";
import reviewImage from "assets/reviewImage_01.png";
import React from "react";
import styled from "styled-components";

const Section4 = () => (
  <Area>
    <TopRect />
    <Wrapper>
      <Section>
        <TitleSection>
          <span>
            다양한 <b>후기가 말해주는</b>
          </span>
        </TitleSection>
        <BadgeSection>
          <img src={badge} alt="badge" />
        </BadgeSection>
        <ImageSection>
          <img src={reviewImage} alt="review" />
        </ImageSection>
      </Section>
    </Wrapper>
  </Area>
);
const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 3rem 0;
  background-color: #fff;
  border-radius: 3rem;

  .shadow {
    box-shadow: 0 4px 5px rgb(0 0 0 / 60%);
  }

  img {
    position: relative;
    width: 90%;
    height: 90%;
    margin: 10px;
  }
`;

const BadgeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

const TitleSection = styled.div`
  margin-top: 4rem;

  span {
    font-size: 2rem;
  }
`;

const TopRect = styled.div`
  width: 10px;
  height: 50px;
  margin: auto;
  background-color: #002d51;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 170vh;
  @media (max-width: 1000px) {
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-color: #c6c6c6;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default Section4;
