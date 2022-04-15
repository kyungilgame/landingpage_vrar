import React, { useState } from "react";

import styled from "styled-components";
import "../styles/css/App.css";

import BlackLogo from "../Image/BlackMinistryImage.png";
import Logo from "../Image/Whitelogo.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  color: #7900ff;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  color: white;
`;

const SecondLineTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5vw;
  color: white;
  margin-top: 2vw;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 30vw;
  height: 21vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  color: #7900ff;
  margin-top: 2.5vw;
  margin-bottom: 1vw;
`;

const LastLineInnerBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 0.5vw;
  width: 20vw;
  height: 3vw;
  background-color: #101010;
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImageContainerOne = styled.div`
  width: 10vw;
  height: 3vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 2vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 2vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.5vw",
      }}
    >
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Bold",
            fontSize: "1vw",
            color: "#353535",
          }}
        >
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          height: "1vw",
          width: "0.15vw",
          backgroundColor: "#353535",
          marginTop: "0.3vw",
          marginLeft: "1vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "1vw",
            marginTop: "0.5vw",
            marginLeft: "1vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </div>
  );
};

const ContentsOne = () => {
  return (
    <>
      <ContentsOneContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "25vw",
            height: "5vw",
            marginTop: "3vw",
          }}
        >
          <ImageContainerOne
            src={Logo}
            style={{ width: "12vw" }}
          ></ImageContainerOne>
          <div>
            <XImageLeft></XImageLeft>
            <XImageRight></XImageRight>
          </div>
          <ImageContainerOne
            src={BlackLogo}
            style={{ marginLeft: "2vw" }}
          ></ImageContainerOne>
        </div>
        <FirstLine>쉽고 빠르게,</FirstLine>
        <FirstLine>국내 최단기 개발자 취업 솔루션</FirstLine>
        <SecondLine>'메타버스 월드'</SecondLine>
        <SecondLine>게임 기획자 부트캠프</SecondLine>
        <SecondLineTwo>
          24주 만에 여러분은 협업에서 일할 수 있는 실무 전문가가 될 수 있습니다.
        </SecondLineTwo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "65%",
          }}
        >
          <ContentsBox>
            <FirstLineInnerBox>VR 4기 챌린저 모집</FirstLineInnerBox>
            <InnerContentsBox
              title={"기간"}
              duration={"2022.02.23 ~ 2022.08.30"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"시간"}
              duration={"PM 15:30 ~ PM 21:50"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"모집마감"}
              duration={"2022.02.17"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"합격자 발표일"}
              duration={"2022.04.01"}
            ></InnerContentsBox>
            <LastLineInnerBox style={{ cursor: "unset" }}>
              <text
                style={{
                  fontSize: "1.5vw",
                  color: "#fdff6b",
                }}
              >
                모집마감
              </text>
            </LastLineInnerBox>
          </ContentsBox>
          <ContentsBox>
            <FirstLineInnerBox>VR 5기 챌린저 모집</FirstLineInnerBox>
            <InnerContentsBox
              title={"기간"}
              duration={"2022.04.18 ~ 2022.12.27"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"시간"}
              duration={"AM 09:00 ~ PM 18:00"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"모집마감"}
              duration={"2022.04.15"}
            ></InnerContentsBox>
            <InnerContentsBox
              title={"합격자 발표일"}
              duration={"2022.04.15"}
            ></InnerContentsBox>
            <LastLineInnerBox
              as={"a"}
              href={"https://forms.gle/rZwjvPLmmkinMGN87"}
            >
              <text
                style={{
                  fontSize: "1.5vw",
                  color: "white",
                }}
              >
                지원하기
              </text>
            </LastLineInnerBox>
          </ContentsBox>
        </div>
        <div style={{ marginTop: "1vw" }}>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#ededed",
              marginTop: "0.5vw",
            }}
          >
            해당 부트캠프는 국가기간 전략산업직종 훈련과정으로
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#ededed",
              marginTop: "0.5vw",
            }}
          >
            국민내일배움카드
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#ededed",
              marginTop: "0.5vw",
            }}
          >
            가 필요합니다.
          </text>
        </div>
      </ContentsOneContainer>
    </>
  );
};

export default ContentsOne;
