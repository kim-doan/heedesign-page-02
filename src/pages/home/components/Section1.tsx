/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import checkIcon from "assets/checkIcon.png";
import mainSectionMobile from "assets/mainSection_m.png";
import mainSection from "assets/mainSection.png";
import React, { useCallback } from "react";
import styled from "styled-components";

const Section1 = () => {
  const handleClick = useCallback(() => {
    window.open(
      "https://www.ictmarket.or.kr:8443/ajax/ajax3.do?id=PRE0000163234&seq=1&yn=1",
    );
  }, []);

  return (
    <Area>
      <Wrapper>
        <Section>
          <Partition>
            <BlankArea />
            <Title>
              <TitleSection>
                <img src={checkIcon} alt={checkIcon} onClick={handleClick} />
              </TitleSection>
              <TitleSection color="#011E23">
                <span>이세상</span>
              </TitleSection>
              <TitleSection color="#011E23">
                <span>
                  <b>가격이</b>
                </span>
              </TitleSection>
              <TitleSection color="#011E23">
                <span>
                  <b>아니다</b>
                </span>
              </TitleSection>
              <TitleSection2 color="#011E23">
                <span>전국최저가 보장</span>
              </TitleSection2>
            </Title>
          </Partition>
        </Section>
      </Wrapper>
    </Area>
  );
};

const BlankArea = styled.div`
  flex: 2;
`;

const Partition = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  flex: 1 1;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSansLight;
  line-height: 1.3;
  text-align: start;

  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;

const TitleSection = styled.div<{ color?: string }>`
  color: #011e23;
  letter-spacing: 0.25rem;
  white-space: nowrap;

  b {
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: GmarketSans;
    font-weight: bold;
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 3.8rem;
  }

  img {
    height: 3.8rem;
    margin-left: 7.5rem;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    span {
      font-size: 3rem;
      letter-spacing: 0.1rem;
    }

    img {
      margin-left: 5rem;
      font-size: 3rem;
    }
  }
`;

const TitleSection2 = styled.div<{ color?: string }>`
  color: #011e23;
  letter-spacing: 0.2rem;
  white-space: nowrap;

  b {
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: GmarketSans;
    font-weight: bold;
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 1.4rem;
  }

  @media (max-width: 700px) {
    span {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 1280px) {
    justify-content: end;
    height: calc(100vh - 71px);
  }

  @media (max-width: 500px) {
    height: 500px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  background-image: url(${mainSection});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 850px) {
    background-image: url(${mainSectionMobile});
  }
`;

const Area = styled.div`
  width: 100%;
  background: linear-gradient(to right, #d0d0d2, #cccbce);
`;

export default Section1;
