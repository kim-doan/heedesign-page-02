import human from "assets/human.png";
import whiteLogo from "assets/whiteLogo.png";
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
          <RectSection>
            <img src={whiteLogo} alt="whiteLogo" />는 다릅니다!
          </RectSection>
        </ImageSection>
      </Section>
    </Wrapper>
  </Area>
);

const TopRect = styled.div`
  width: 10px;
  height: 50px;
  margin: auto;
  background-color: #fff;
`;

const TitleSection = styled.div<{ color?: string }>`
  padding-right: 20px;
  padding-left: 20px;

  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  color: #fff;

  b {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 2rem;
  }

  @media (max-width: 700px) {
    padding-right: 10px;
    padding-left: 10px;

    span {
      font-size: 1.3rem;
    }

    b {
      font-size: 1.3rem;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  margin-top: 50px;

  img {
    height: 100%;
    min-height: 800px;
  }

  @media (max-width: 700px) {
    height: 360px;

    img {
      min-height: 200px;
    }
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

  img {
    height: 2.5rem;
    min-height: 2.5rem;
    margin: -0.15rem 0.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;

    img {
      width: 8.5rem;
      height: 2.5rem;
      min-height: 2.5rem;
      margin: -0.3rem 0.5rem;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 150vh;

  @media (max-width: 500px) {
    gap: 15px;
    height: 700px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background: #3e403f;
`;

export default Section2;
