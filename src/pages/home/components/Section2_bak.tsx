import CheckIcon from "assets/checkIcon.png";
import Section2Icon1 from "assets/section2Icon1.png";
import Section2Icon2 from "assets/section2Icon2.png";
import Section2Icon3 from "assets/section2Icon3.png";
import SectionBackground from "assets/sectionBackground.png";
import React from "react";
import styled from "styled-components";

import { AnimationWrapper } from "components/Animation";

const Section2Bak = () => {
  const handleIconClick = () => {
    window.open(
      "https://www.ictmarket.or.kr:8443/ajax/ajax3.do?id=PRE0000163234&seq=1&yn=1",
    );
  };

  return (
    <Area>
      <Wrapper>
        <Section>
          <Title>
            <TitleIcon onClick={handleIconClick}>
              <img src={CheckIcon} height="100%" alt="check" />
            </TitleIcon>
            <TitleSection1>
              <span>울산 NO.1 휴대폰 성지! 휴대폰#</span>
            </TitleSection1>
            <TitleSection2>
              <span>휴대폰 비쌀이유가 없습니다</span>
            </TitleSection2>
            <TitleSection3>
              <span>전국최저가보장</span>
            </TitleSection3>
          </Title>
          <Card>
            <CardItem type="fadeUp" delay={250}>
              <CardItemImage>
                <img src={Section2Icon1} alt="icon" />
              </CardItemImage>
              <CardItemTextArea>
                <CardItemBoldText>
                  휴대폰#에서는 불가능이란 없습니다
                </CardItemBoldText>
                <CardItemLightText>
                  휴대폰 관련하여 필요하신 부분이 있으시다면
                </CardItemLightText>
                <CardItemLightText>언제든지 말씀해주세요!</CardItemLightText>
              </CardItemTextArea>
            </CardItem>
            <CardItem type="fadeUp" delay={250}>
              <CardItemImage>
                <img src={Section2Icon2} alt="icon" />
              </CardItemImage>
              <CardItemTextArea>
                <CardItemBoldText>
                  인터넷, TV 현금 사은품 혜택 모두
                </CardItemBoldText>
                <CardItemBoldText>만족하실 수 있도록!</CardItemBoldText>
                <CardItemLightText>
                  혜택많은 곳, 사은품 잘챙겨주는 곳을 찾고계셨나요? 걱정마세요!
                </CardItemLightText>
                <CardItemLightText>
                  챙겨드릴 수 있는 모든 것을 아낌없이 챙겨 드립니다
                </CardItemLightText>
              </CardItemTextArea>
            </CardItem>
            <CardItem type="fadeUp" delay={250}>
              <CardItemImage>
                <img src={Section2Icon3} alt="icon" />
              </CardItemImage>
              <CardItemTextArea>
                <CardItemBoldText>구매후 관리!</CardItemBoldText>
                <CardItemBoldText>
                  가족분들까지 모두 철저하게 도와드립니다.
                </CardItemBoldText>
                <CardItemLightText>
                  구매 후 나몰라라 하고 태도 돌변하는 경우 많이보셨죠?
                </CardItemLightText>
                <CardItemLightText>
                  저희 휴대폰샵에서는 직영 대리점 출신의 공동대표들이 운영하는
                  매장으로
                </CardItemLightText>
                <CardItemLightText>
                  구매 후 직원이 바뀌는 일이 절대 없으며 태도 또한 바뀌는 일이
                  절대 없습니다
                </CardItemLightText>
              </CardItemTextArea>
            </CardItem>
          </Card>
        </Section>
      </Wrapper>
    </Area>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230vh;

  @media (max-width: 1050px) {
    height: 240vh;
  }

  @media (min-width: 1050px) {
    padding-top: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const TitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  cursor: pointer;
`;

const TitleSection1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 40px auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  background-color: #ffce50;
  border-radius: 2.5rem;

  @media (max-width: 500px) {
    margin: 20px auto;
  }
`;

const TitleSection2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 2.5rem;
  color: #ff8787;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const TitleSection3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 2.5rem;
  color: #ffce50;
  text-align: center;
  -webkit-text-stroke: 0.11rem white;
  box-shadow: 0 0.5rem rgb(255 255 255 / 40%);

  @media (max-width: 550px) {
    font-size: 2rem;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
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
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 3px 4px 8.55px 0.45px rgb(0 0 0 / 15%);

  @media (max-width: 1050px) {
    flex-direction: column;
    margin: 0.6rem;
    text-align: center;
  }
`;

const CardItemImage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  padding: 1rem;
  margin: auto;
  @media (max-width: 1050px) {
    flex: 2;
    margin: 0 auto;
  }
`;
const CardItemTextArea = styled.div`
  flex: 3;
  padding: 0.5rem 1rem;
  margin: auto;
  font-size: 1.4rem;
  line-height: 1.5;
  @media (max-width: 1050px) {
    flex: 1;
    padding: 0;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const CardItemBoldText = styled.div`
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-weight: bold;
`;

const CardItemLightText = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  color: #8c8c8c;
`;

const Area = styled.div`
  width: 100%;
  background-image: url(${SectionBackground});
  background-color: #073b61;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Section2Bak;
