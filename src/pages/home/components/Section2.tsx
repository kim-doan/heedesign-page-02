import section2Background from "assets/section2Background.png";
import React from "react";
import styled from "styled-components";

const Section2 = () => (
  <Area>
    <Wrapper>
      <Section>
        <Partition>
          <Title>
            <TitleWrapper>
              <RectText>울산에서 소문난 성지!</RectText>
              <TitleSection color="#011E23">
                <span>울산에서</span>
              </TitleSection>
              <TitleSection color="#011E23">
                <span>
                  <b>휴대폰성지를</b>
                </span>
              </TitleSection>
              <TitleSection color="#011E23">
                <span>
                  <b>찾고계시다면</b>
                </span>
              </TitleSection>
              <TitleSection color="#011E23">
                <span>
                  <b>폰싸게파는언니</b>
                </span>
              </TitleSection>
            </TitleWrapper>
          </Title>
          <ImageArea>
            <img
              src={section2Background}
              alt="section2Background"
              height="100%"
            />
          </ImageArea>
        </Partition>
      </Section>
    </Wrapper>
  </Area>
);

const RectText = styled.div`
  padding: 5px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSansLight;
  font-size: 1.8rem;
  color: #012027;
  border: 2px solid #012027;
  border-radius: 30px;

  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

const ImageArea = styled.div`
  flex: 1 1;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    max-width: 700px;
  }

  @media (max-width: 700px) {
    img {
      max-width: 350px;
      height: auto;
    }
  }
`;

const Partition = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;

  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: GmarketSansLight;
  line-height: 1.3;
  text-align: start;

  @media (max-width: 500px) {
    width: 100%;
    min-width: 100%;
    margin-bottom: 0;
  }
`;

const TitleSection = styled.div<{ color?: string }>`
  color: #011e23;
  letter-spacing: 5px;

  b {
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: GmarketSans;
    font-weight: bold;
    color: ${(props) => props.color || "#fff"};
  }

  span {
    font-size: 2.5rem;
  }

  @media (max-width: 700px) {
    span {
      font-size: 2rem;
      white-space: word-wrap;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media (max-width: 500px) {
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
  background: #d0d0d2;
`;

export default Section2;
