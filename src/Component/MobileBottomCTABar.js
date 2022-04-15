import styled from "styled-components";
import "../styles/css/App.css";

import React, { useState } from "react";
import Timer from "../Function/Timer";

import WhiteArrow from "../Image/WhiteArrow.png";

const ContentsOneContainer = styled.div`
  position: fixed;
  bottom: 6vw;
  width: 80%;
  height: 18vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #101010;
  border-radius: 1vw;
  background-size: 20vw 3vw;
  background-image: url(${WhiteArrow});
  background-position: right 74% bottom 82%;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  color: #0d7377;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  color: #0d7377;
`;

const ThirdLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  color: #101010;
`;

const ApplyButton = styled.button`
  width: 65vw;
  height: 5vw;
  background-color: #00ffd6;
  border-color: #00ffd6;
  border-radius: 3vw;
  margin-top: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseButton = styled.div`
  margin-top: 0.7vw;
  margin-left: 1vw;
  width: 1.5vw;
  height: 1.5vw;
  cursor: pointer;
`;

const XImageLeft = styled.div`
  width: 2.5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 2.5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const dday = new Date("April 15, 2022, 0:00:00").getTime();

const today = new Date().getTime(); // 밀리 초 단위
const gap = dday - today;
const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
const sec = Math.ceil((gap % (1000 * 60)) / 1000);

const hoursMinSecs = { hours: hour, minutes: min, seconds: sec };

const MobileBottomCTABar = () => {
  const [CTAAtive, setCTAAtive] = useState(true);
  return CTAAtive === true ? (
    <ContentsOneContainer>
      <div
        style={{
          width: "94%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          marginLeft: "4vw",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "1.5vw",
          }}
        >
          <FirstLine>
            <text style={{ color: "#00ffd6" }}>수강료</text>
          </FirstLine>
          <FirstLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              10,826,350원
            </text>
          </FirstLine>
          <FirstLine>
            <text style={{ color: "#00ffd6", marginLeft: "1.5vw" }}>0원!!</text>
          </FirstLine>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "1.5vw",
          }}
        >
          <SecondLine>
            <text style={{ color: "#00ffd6" }}>수강신청 마감까지</text>
          </SecondLine>
          <SecondLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              {`${day}`}일
            </text>
            <Timer hoursMinSecs={hoursMinSecs}></Timer>
          </SecondLine>
          <SecondLine>
            <text style={{ color: "white", marginLeft: "0.5vw" }}>
              남았어요!
            </text>
          </SecondLine>
        </div>
        <ApplyButton as={"a"} href={"https://forms.gle/bNkmRwr2wMwfHBZp7"}>
          <ThirdLine>수강신청하기{">>"}</ThirdLine>
        </ApplyButton>
      </div>

      <div style={{ width: "6%", height: "15vw" }}>
        <CloseButton
          onClick={() => {
            setCTAAtive(false);
          }}
        >
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </CloseButton>
      </div>
    </ContentsOneContainer>
  ) : (
    <></>
  );
};

export default MobileBottomCTABar;
