import React from "react";
import styled from "styled-components";

import { AnimationWrapper } from "components/Animation";
import ImageSlide from "components/ImageSlider";

const Section3Bak = () => (
  <Area>
    <Wrapper>
      <Section type="fadeLeft" delay={300}>
        <SectionIcon />
        <SectionContent>
          <span>손님이 끊기지 않는이유</span>
        </SectionContent>
        <SectionContent2>
          <span>후기가 증명</span>
        </SectionContent2>
        <SectionSliderGroup>
          <ImageSlide />
        </SectionSliderGroup>
      </Section>
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
  height: 150vh;
  @media (max-width: 1000px) {
    gap: 0.1rem;
    height: 90vh;
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
  background-image: linear-gradient(#eaeaea 1px, transparent 1px),
    linear-gradient(to right, #eaeaea 1px, #c3ddda 1px);
  background-color: #c3ddda;
  background-size: 20px 20px;
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 2.8rem;
  color: #363636;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2.3rem;
    white-space: nowrap;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const SectionContent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  margin: 0.8rem auto;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSans;
  font-size: 2.8rem;
  color: #073b61;
  text-align: center;
  -webkit-text-stroke: 0.12rem white;

  @media (max-width: 550px) {
    font-size: 2.3rem;
    white-space: nowrap;
    -webkit-text-stroke: 0.08rem white;
  }
`;

const SectionSliderGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;
  height: 75vh;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
`;
export default Section3Bak;
