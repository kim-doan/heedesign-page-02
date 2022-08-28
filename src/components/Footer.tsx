import LogoImg from "assets/logo.png";
import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Area>
    <Wrapper>
      <FtGroup>
        <FtLogo />
        <FtInfo>
          <InfoItem>
            <b>상호명</b> : 청춘
          </InfoItem>
          <InfoItem>
            <b>사업자번호</b> : 594-78-00353
          </InfoItem>
          <InfoItem>
            <b>대표자</b> : 이보형
          </InfoItem>
          <InfoItem>
            <b>TEL</b> : 052-235-5550
          </InfoItem>
          {/* <InfoItem>
            <b>위치</b> : 
          </InfoItem> */}
          <InfoItem>
            <b>주소</b> : 울산광역시 동구 대학길 86, 1층(화정동)
          </InfoItem>
        </FtInfo>
      </FtGroup>
    </Wrapper>
  </Area>
);

const FtGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;
  padding-top: 30px;

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 0;
  }
`;

const FtLogo = styled.div`
  width: 150px;
  padding: 1rem;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const FtInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  line-height: 1;
  color: #adadad;

  @media only screen and (max-width: 1050px) {
    justify-content: center;
    text-align: center;
  }
`;
const InfoItem = styled.span`
  padding-right: 10px;
  padding-left: 10px;

  margin-bottom: 15px;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(1280px + 15rem);
  margin: 0 auto;
`;

const Area = styled.div`
  width: 100%;
  background-color: #464946;
`;

export default Footer;
