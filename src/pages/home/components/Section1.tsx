import mainSectionMobile from "assets/mainSection_m.png";
import mainSectionTablet from "assets/mainSection_t.png";
import mainSection from "assets/mainSection.png";
import React from "react";
import styled from "styled-components";

const Section1 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Partition>
          <BlankArea />
          <Title>
            {/* <TitleSection1>
              소중한 시간 절약하세요! 여기가 진짜입니다!
            </TitleSection1> */}
            <TitleSection2>
              <span>울산에서</span>
            </TitleSection2>
            <TitleSection2 color="#002D51">
              <span>
                <b>휴대폰 성지</b>를 찾고 계시다면
              </span>
            </TitleSection2>
            <TitleSection2 color="#002D51" style={{ whiteSpace: "nowrap" }}>
              <span>
                <b>폰싸게파는언니</b>
              </span>
            </TitleSection2>
            {/* <TitleSection3 color="#002D51">
              울산에서 성지를 찾는 <b>한분의 고객도</b> 놓치지 않겠습니다
            </TitleSection3> */}
          </Title>
        </Partition>
      </Section>
    </Wrapper>
  </Area>
);

const BlankArea = styled.div`
  flex: 2;

  @media (max-width: 1450px) {
    flex: 0;
  }
`;

const Partition = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  flex: 1 1;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  line-height: 1.5;
  text-align: start;
  -webkit-text-stroke: 0.05rem black;

  @media (max-width: 1450px) {
    margin-bottom: 2.8em;
    text-align: center;
    background-color: rgb(0 45 81 / 70%);
  }

  @media (max-width: 900px) {
    padding: 1rem;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;

// const TitleSection1 = styled.div<{ color?: string }>`
//   color: #fff;
//   white-space: word-wrap;

//   b {
//     color: ${(props) => props.color || "#fff"};
//   }
// `;
const TitleSection2 = styled.div<{ color?: string }>`
  color: #fff;

  b {
    color: ${(props) => props.color || "#fff"};
    box-shadow: 0 0.7rem rgb(255 255 255 / 50%);
  }

  span {
    font-size: 2.6rem;
  }

  @media (max-width: 1450px) {
    b {
      color: #ffdea9;
    }
  }

  @media (max-width: 700px) {
    span {
      font-size: 2rem;
      white-space: word-wrap;
    }
  }
`;

// const TitleSection3 = styled.div<{ color?: string }>`
//   color: #14bbb1;
//   white-space: word-wrap;
//   -webkit-text-stroke: 0.05rem white;

//   b {
//     color: ${(props) => props.color || "#fff"};
//   }
// `;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 1450px) {
    justify-content: end;
  }
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
  background-image: url(${mainSection});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1000px) {
    background-image: url(${mainSectionTablet});
  }
  @media (max-width: 700px) {
    background-image: url(${mainSectionMobile});
  }
`;

const Area = styled.div`
  width: 100%;
  background: linear-gradient(to right, #d0d0d2, #cccbce);
`;

// background-color: #ff3629;
//   opacity: 0.5;

export default Section1;
