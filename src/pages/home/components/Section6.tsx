import KakaoIcon from "assets/kakaoIcon.png";
import React from "react";
import styled from "styled-components";

const Section6 = () => (
  <Area>
    <Wrapper>
      <Section>
        <TitleIcon>
          <img src={KakaoIcon} height="100%" alt="check" />
        </TitleIcon>
        <Title>
          <TitleSection1>
            <span>궁금하신 점이 있으시다면</span>
            <span>카카오톡 채널추가후 문의주세요!</span>
          </TitleSection1>
          <TitleSection2>
            <span>365일 24시간 상담가능합니다. ^^</span>
          </TitleSection2>
        </Title>
      </Section>
    </Wrapper>
  </Area>
);

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 50vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 30vh;
    padding-top: 1rem;
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
  background-color: #ffea00;
`;

const Title = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
`;
const TitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

const TitleSection1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.5rem;
  margin: 15px;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #000;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    margin: 15px auto;
    text-align: center;
  }
`;

const TitleSection2 = styled.div`
  display: flex;
  margin: 15px;
  font-size: 1.3em;
  color: #000;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export default Section6;
