import styled from "styled-components";
import "../styles/css/App.css";

import Image from "../Image/MobileBackgroundImage.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 180vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 0;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  color: #7900ff;
  margin-top: 5vw;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  color: white;
`;

const ThirdLine = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  color: white;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 75vw;
  height: 60vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  color: #7900ff;
  margin-top: 4vw;
  margin-bottom: 1vw;
`;

const LastLineInnerBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 1vw;
  width: 100%;
  height: 10vw;
  background-color: #101010;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <>
      <div style={{ marginTop: "1vw" }}>
        <text style={{ fontFamily: "Pretendard-Bold", fontSize: "3vw" }}>
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          width: "4vw",
          height: "0.15vw",
          backgroundColor: "#7900ff",
          marginTop: "1.5vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "2.5vw",
            marginTop: "1.5vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </>
  );
};

const MobileContentsOne = () => {
  return (
    <>
      <ContentsOneContainer>
        <FirstLine>쉽고 빠르게,</FirstLine>
        <FirstLine style={{ marginTop: "0vw" }}>
          국내 최단기 개발자 취업 솔루션
        </FirstLine>
        <SecondLine>VR콘텐츠 전문가</SecondLine>
        <SecondLine>부트캠프</SecondLine>
        <ThirdLine>24주 만에 여러분은 헙업에서 일할 수 있는</ThirdLine>
        <ThirdLine>실무 전문가가 될 수 있습니다.</ThirdLine>
        <ContentsBox>
          <FirstLineInnerBox>VR 4기 챌린처 모집</FirstLineInnerBox>
          <InnerContentsBox
            title={"모집기간"}
            duration={"2022.02.23 ~ 2022.08.30"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"PM 15:30 ~ 21:50"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"마감일"}
            duration={"2022.02.17"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.04.01"}
          ></InnerContentsBox>
          <LastLineInnerBox>
            <text
              style={{
                fontSize: "4vw",
                color: "#fdff6b",
                marginLeft: "0.5vw",
              }}
            >
              모집마감
            </text>
          </LastLineInnerBox>
        </ContentsBox>

        <ContentsBox style={{ marginTop: "10vw" }}>
          <FirstLineInnerBox>VR 5기 챌린처 모집</FirstLineInnerBox>
          <InnerContentsBox
            title={"모집기간"}
            duration={"2022.05.23 ~ 2022.11.30"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"PM 15:30 ~ 21:50"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"마감일"}
            duration={"2022.05.18"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.05.20"}
          ></InnerContentsBox>
          <LastLineInnerBox
            as={"a"}
            href={"https://forms.gle/rZwjvPLmmkinMGN87"}
          >
            <text
              style={{
                fontSize: "4vw",
                color: "white",
                marginLeft: "0.5vw",
              }}
            >
              지원하기
            </text>
          </LastLineInnerBox>
        </ContentsBox>
      </ContentsOneContainer>
    </>
  );
};

export default MobileContentsOne;
