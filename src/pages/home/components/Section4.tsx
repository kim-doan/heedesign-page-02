import FlagIcon from "assets/flagIcon.png";
import OfficeImage from "assets/officeImage.png";
import SectionBackground3 from "assets/sectionBackground3.png";
import SectionBackground3M from "assets/sectionBackground3m.png";
import React from "react";
import styled from "styled-components";

import { AnimationWrapper } from "components/Animation";

const Section4 = () => (
  <Area>
    <Wrapper>
      <Section type="scaleIn" delay={350}>
        <SectionIcon>
          <img src={FlagIcon} height="100%" alt="check" />
        </SectionIcon>
        <SectionContent>
          <span>울산 최저가 조건</span>
        </SectionContent>
        <SectionImageGroup>
          <img src={OfficeImage} height="100%" alt="check" />
        </SectionImageGroup>
      </Section>
      <Card>
        <CardItem type="fadeUp" delay={250}>
          <CardItemTextArea>
            <CardItemBoldText>가격 신뢰 믿음</CardItemBoldText>
            {/* <CardItemMiddleText>
              직영 대리점 출신의 공동대표들이 운영하는 매장
            </CardItemMiddleText> */}
            <CardItemLightText>매번 바뀌는 이벤트 활동으로,</CardItemLightText>
            <CardItemLightText>
              여러가지 혜택들이 고객님을 기다리고 있습니다.
            </CardItemLightText>
          </CardItemTextArea>
        </CardItem>
        <CardItem type="fadeUp" delay={250}>
          <CardItemTextArea>
            <CardItemBoldText>
              판매전보다 판매후에 더 잘하는 매장
            </CardItemBoldText>
            {/* <CardItemMiddleText>상담문의 시 휴대폰#</CardItemMiddleText> */}
            <CardItemLightText>
              홈페이지를 통하여 문의주셨다 말씀하시면 추가 할인혜택이 있으니
            </CardItemLightText>
            <CardItemLightText>꼭! 미리 말씀 부탁드립니다.</CardItemLightText>
          </CardItemTextArea>
        </CardItem>
      </Card>
    </Wrapper>
  </Area>
);

const Section = styled(AnimationWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 130vh;
  @media (max-width: 1000px) {
    height: 60vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(1280px + 15rem);
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-image: url(${SectionBackground3});
  background-color: #ffce50;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    background-image: url(${SectionBackground3M});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-size: 2.8rem;
  color: white;
  text-align: center;
  -webkit-text-stroke: 0.12rem black;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem black;
  }
`;

const SectionImageGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background-color: white;
  border-radius: 0.5rem;

  img {
    max-width: 100%;
    max-height: auto;
  }

  @media (max-width: 1000px) {
    height: 30vh;
  }
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
`;

const Card = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (max-width: 550px) {
    flex: 4;
  }
`;

const CardItem = styled(AnimationWrapper)`
  display: flex;
  height: 100%;
  padding: 0.5rem 1rem;
  margin: 1.2rem;
  background-color: #073b61;
  border-radius: 1.5rem;
  box-shadow: 3px 4px 8.55px 0.45px rgb(0 0 0 / 15%);

  @media (max-width: 1050px) {
    flex-direction: column;
    margin: 0.6rem;
    text-align: center;
  }
`;

const CardItemTextArea = styled.div`
  flex: 3;
  padding: 0.5rem 1rem;
  margin: auto;
  font-size: 1.4rem;
  line-height: 1.5;
  text-align: center;
  @media (max-width: 1050px) {
    flex: 1;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const CardItemBoldText = styled.div`
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: Jalnan;
  font-weight: bold;
  color: white;
`;

// const CardItemMiddleText = styled.div`
//   font-family: "Noto Sans KR", sans-serif;
//   font-size: 0.9rem;
//   color: #ffce50;
// `;

const CardItemLightText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  color: #fff;
`;

export default Section4;
