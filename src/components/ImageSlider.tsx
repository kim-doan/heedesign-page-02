import React from "react";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import reviewer1 from "../assets/reviewers/reviewer01.png";
import reviewer2 from "../assets/reviewers/reviewer02.png";
import reviewer3 from "../assets/reviewers/reviewer03.png";
import reviewer4 from "../assets/reviewers/reviewer04.png";
import reviewer5 from "../assets/reviewers/reviewer05.png";
import reviewer6 from "../assets/reviewers/reviewer06.png";
import reviewer7 from "../assets/reviewers/reviewer07.png";
import reviewer8 from "../assets/reviewers/reviewer08.png";
import reviewer9 from "../assets/reviewers/reviewer09.png";
import reviewer10 from "../assets/reviewers/reviewer10.png";

import "swiper/css";
import "swiper/css/navigation";

const ImageSlide = () => (
  <Swiper
    modules={[Autoplay]}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    style={{ width: "100%" }}
  >
    <SwiperSlide>
      <SlideImg src={reviewer1} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer2} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer3} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer4} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer5} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer6} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer7} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer8} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer9} />
    </SwiperSlide>
    <SwiperSlide>
      <SlideImg src={reviewer10} />
    </SwiperSlide>
  </Swiper>
);

const SlideImg = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default ImageSlide;
