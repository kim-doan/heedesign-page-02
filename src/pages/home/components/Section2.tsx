import React from "react";
import styled from "styled-components";

const Section2 = () => (
  <Area>
    <Wrapper>
      <Section>
        {/* <Partition>
          <Title>
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
          </Title>
          <ImageArea />
        </Partition> */}
      </Section>
    </Wrapper>
  </Area>
);

// const ImageArea = styled.div`
//   flex: 2;
//   background-image: url(${section1Plus});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// const Partition = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   height: 100%;
// `;

// const Title = styled.div`
//   flex: 1 1;
//   /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
//   font-family: GmarketSansLight;
//   line-height: 1.3;
//   text-align: start;

//   @media (max-width: 500px) {
//     margin-bottom: 0;
//   }
// `;

// const TitleSection = styled.div<{ color?: string }>`
//   color: #011e23;
//   letter-spacing: 20px;

//   b {
//     /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
//     font-family: GmarketSans;
//     font-weight: bold;
//     color: ${(props) => props.color || "#fff"};
//   }

//   span {
//     font-size: 3.8rem;
//   }

//   @media (max-width: 700px) {
//     span {
//       font-size: 3rem;
//       letter-spacing: 10px;
//       white-space: word-wrap;
//     }
//   }
// `;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

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
`;

const Area = styled.div`
  width: 100%;
  background: linear-gradient(to right, #d0d0d2, #cccbce);
`;

export default Section2;
