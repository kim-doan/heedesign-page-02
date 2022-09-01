import human from "assets/human.png";
import React from "react";
import styled from "styled-components";

const Section2 = () => (
  <Area>
    <TopRect />
    <Wrapper>
      <Section>
        <TitleSection color="white">
          <span>휴대폰 비쌀이유가 없습니다</span>
        </TitleSection>
        <TitleSection color="white">
          <b>휴대폰 성지라고 다 같은 성지가 아니에요</b>
        </TitleSection>
        <ImageSection>
          <img src={human} alt="human" />
          <RectSection>폰(싸게)파는 언니는 다릅니다!</RectSection>
        </ImageSection>
      </Section>
    </Wrapper>
  </Area>
);

const TopRect = styled.div`
  width: 10px;
  height: 50px;
  margin: auto;
  background-color: #002d51;
`;

const TitleSection = styled.div<{ color?: string }>`
  color: #fff;
  white-space: nowrap;

  b {
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: GmarketSans;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    span {
      font-size: 1.5rem;
    }

    b {
      font-size: 1.5rem;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-top: 50px;

  img {
    height: 100%;
    min-height: 250px;
  }
`;

const RectSection = styled.div`
  padding: 15px 30px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  background-color: #002d51;
  border: 2px solid #fff;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;

  @media (max-width: 500px) {
    gap: 15px;
    height: 500px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(1280px + 15rem);
  height: 100%;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background: #5b79db;
`;

export default Section2;
