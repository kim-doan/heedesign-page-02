import mainSection from "assets/mainSection.png";
import React from "react";
import styled from "styled-components";

const Section1 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Title>
          <TitleSection1>
            소중한 시간 절약하세요! 여기가 진짜입니다!
          </TitleSection1>
          <TitleSection2>
            <span>울산지역</span>
          </TitleSection2>
          <TitleSection2 color="#002D51">
            <span>
              <b>우대혜택 제공</b> 매장
            </span>
          </TitleSection2>
          <TitleSection3 color="#002D51">
            울산에서 성지를 찾는 <b>한분의 고객도</b> 놓치지 않겠습니다
          </TitleSection3>
        </Title>
      </Section>
    </Wrapper>
  </Area>
);

const Title = styled.div`
  padding: 3rem;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 900px) {
    padding: 1rem;
  }
`;

const TitleSection1 = styled.div<{ color?: string }>`
  color: #fff;
  white-space: word-wrap;

  b {
    color: ${(props) => props.color || "#fff"};
  }
`;
const TitleSection2 = styled.div<{ color?: string }>`
  color: #fff;

  b {
    color: ${(props) => props.color || "#fff"};
    box-shadow: 0 0.7rem rgb(255 255 255 / 50%);
  }

  span {
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    span {
      font-size: 3.5rem;
      white-space: word-wrap;
    }
  }
`;

const TitleSection3 = styled.div<{ color?: string }>`
  color: #14bbb1;
  white-space: word-wrap;
  -webkit-text-stroke: 0.05rem white;

  b {
    color: ${(props) => props.color || "#fff"};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 500px) {
    height: 60vh;
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
  background-image: url(${mainSection});
  background-color: #ff3629;
  background-repeat: no-repeat;
  background-size: cover;
`;

// background-color: #ff3629;
//   opacity: 0.5;

export default Section1;
