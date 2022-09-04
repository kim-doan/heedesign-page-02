import section6Background from "assets/section6Background.png";
import * as React from "react";
import styled from "styled-components";

const Section6 = () => (
  <Area>
    <Wrapper>
      <Section />
    </Wrapper>
  </Area>
);

export default Section6;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: auto;
  background: url(${section6Background});
  background-color: #404241;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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
  width: 100%;
  height: 100%;
`;

const Area = styled.div`
  width: 100%;
`;
