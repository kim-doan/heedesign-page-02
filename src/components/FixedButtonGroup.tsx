import React from "react";
import styled from "styled-components";

import kakao from "../assets/contactKakao.png";
import phone from "../assets/contactPhone.png";

const FixedButtonGroup = () => (
  <Group>
    <KakaoContactAnchor href="http://pf.kakao.com/_VTVHb/chat" target="_blank">
      <ContactKakaoImg alt="Contact Kakao" src={kakao} />
      <p>
        <b>카카오톡</b> 문의하기
      </p>
    </KakaoContactAnchor>
    <PhoneContactAnchor href="tel: 052-235-5550">
      <ContactPhoneImg alt="Contact Phone" src={phone} />
      <p>
        지금 바로 <b>전화상담</b>
      </p>
    </PhoneContactAnchor>
  </Group>
);

const Group = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  @media screen and (min-width: 1280px) {
    left: 20%;
    width: 60%;
    height: 3rem;
    overflow: hidden;
  }
`;

const ContactAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
  text-decoration: none;

  @media screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const KakaoContactAnchor = styled(ContactAnchor)`
  color: #3c1d1d;
  background-color: #fae000;
`;

const PhoneContactAnchor = styled(ContactAnchor)`
  color: #fff;
  background-color: #3c1d1d;
`;

const ContactImg = styled.img`
  padding-right: 5px;
  padding-left: 5px;
`;

const ContactKakaoImg = styled(ContactImg)`
  width: 1.5rem;

  @media screen and (min-width: 1280px) {
    width: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 1.5rem;
  }
`;

const ContactPhoneImg = styled(ContactImg)`
  width: 1rem;

  @media screen and (min-width: 1280px) {
    width: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 1rem;
  }
`;

export default FixedButtonGroup;
