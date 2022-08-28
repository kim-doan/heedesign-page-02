import React from "react";
import styled from "styled-components";

import FixedButtonGroup from "components/FixedButtonGroup";
import Footer from "components/Footer";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

const HomePage = () => (
  <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    {/* <Section5 /> */}
    <Section6 />
    <Footer />
    <FixedButtonArea />
    <FixedButtonGroup />
  </>
);

const FixedButtonArea = styled.div`
  width: 100%;
  height: 3.2rem;
  background-color: #464946;
`;

export default HomePage;
