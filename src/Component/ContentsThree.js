import React, { useState } from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const ContentsThreeContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const LineTextOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFive = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const SectionBox = styled.button`
  font-family: "Pretendard-ExtraBold";
  width: 15vw;
  height: 3.5vw;
  border-radius: 1vw;
  border-color: #aecbcc;
  font-size: 2vw;
  color: white;
  cursor: pointer;
  margin-top: 1vw;
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : null;
  }}
`;

const SectionPage = (sectionState) => {
  if (sectionState === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ededed",
          marginTop: "1.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          paddingLeft: "2vw",
        }}
      >
        <LineTextFive marginTop={"2vw"}>C++ 문법</LineTextFive>

        <LineTextFour marginTop={"2vw"}>
          프로그래밍 C언어와 C++익히기
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>기초문법 익히기</LineTextFour>
        <LineTextFour marginTop={"1vw"}>함수 및 포인터란?</LineTextFour>
        <LineTextFour marginTop={"1vw"}>객체지향 프로그래밍이란?</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          ☆콘솔로 만드는 TextRPG 프로젝트
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ededed",
          marginTop: "1.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          paddingLeft: "2vw",
        }}
      >
        <LineTextFive marginTop={"2vw"}>유니티 기초</LineTextFive>

        <LineTextFour marginTop={"2vw"}>C++과 C#문법의 차이</LineTextFour>
        <LineTextFour marginTop={"1vw"}>유니티 기본 툴 다루기</LineTextFour>
        <LineTextFour marginTop={"1vw"}>플레피 버드 에셋 분석 </LineTextFour>
        <LineTextFour marginTop={"1vw"}>☆플레피 버드 커스터마이징</LineTextFour>
        <LineTextFour marginTop={"1vw"}>UGUI 를 통한 UI 제어</LineTextFour>
        <LineTextFour marginTop={"1vw"}>☆팀 프로젝트 진행</LineTextFour>
        <LineTextFour marginTop={"1vw"}>☆개인 프로젝트 진행</LineTextFour>
      </div>
    );
  } else if (sectionState === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ededed",
          marginTop: "1.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          paddingLeft: "2vw",
        }}
      >
        <LineTextFive marginTop={"2vw"}>
          C# 중급문법 및 유니티 최적화
        </LineTextFive>

        <LineTextFour marginTop={"2vw"}>
          Getter Setter와의 차이점과 사용
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          인터페이스를 통한 효율적인 설계 방법
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          외부클래스에 대한 접근 방식, 자신만의 라이브러리화, 함수의 콜백과,
          체인
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          디자인패턴인 옵저버패턴을 통한 이벤트 리스너의 처리
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          클래스, 함수 들의 메타적인 데이터를 다루는 기법
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메모리 단편화와 그것을 방지하는 방법에 대한 최적화 기법
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          프로파일러를 통해 메모리의 불필요한 할당을 발견, 조치할 수 있는 연습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>유니티 최적화</LineTextFour>
      </div>
    );
  } else if (sectionState === 4) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ededed",
          marginTop: "1.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          paddingLeft: "2vw",
        }}
      >
        <LineTextFive marginTop={"2vw"}>VR 심화</LineTextFive>
        <LineTextFour marginTop={"2vw"}>
          Oculus Intergration SDK 분석 (Oculus Intergartion SDK)
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          VR 룸 만들어 오브젝트 제어
        </LineTextFour>
        <LineTextFour>
          (VR의 특성과 한계, VR에 필요한 사용자경험 UX와 그것을 반영한 UI 설계)
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>☆VR 팀프로젝트 진행</LineTextFour>
      </div>
    );
  } else if (sectionState === 5) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ededed",
          marginTop: "1.5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          paddingLeft: "2vw",
        }}
      >
        <LineTextFive marginTop={"2vw"}>취업 준비 기간</LineTextFive>

        <LineTextFour marginTop={"2vw"}>☆개인 최종 프로젝트 진행</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          자기소개서 및 포트폴리오 작성
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          문서 피드백과 모의면접 피드백 진행
        </LineTextFour>
      </div>
    );
  }
};

const ContentsThree = () => {
  const [sectionState, setSectionState] = useState(1);
  return (
    <ContentsThreeContainer>
      <LineTextOne
        marginTop={"5vw"}
        style={{ fontFamily: "Pretendard-Regular", fontSize: "2vw" }}
      >
        국내 다양한 직종으로 취업가능한
      </LineTextOne>
      <LineTextOne>
        <text style={{ color: "#7900ff" }}>'VR콘텐츠 제작 전문가'</text>
        커리큘럼
      </LineTextOne>
      <div
        style={{
          backgroundColor: "#7900ff",
          width: "60vw",
          height: "3vw",
          textAlign: "center",
          paddingTop: "0.2vw",
          marginTop: "0.5vw",
        }}
      >
        <LineTextTwo>
          <text
            style={{
              color: "white",
              letterSpacing: "0.1vw",
              wordSpacing: "0.5vw",
              fontFamily: "Pretendard-Regular",
            }}
          >
            불필요한 과정은 빼고 취업에 꼭 필요한 내용들로만 채웠습니다
          </text>
        </LineTextTwo>
        <div
          style={{
            width: "60vw",
            height: "25vw",
            marginTop: "1vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "35vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            {sectionState === 1 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#7900ff"}
              >
                Section 1
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(1);
                }}
                backgroundColor={"#d8b5ff"}
              >
                Section 1
              </SectionBox>
            )}
            {sectionState === 2 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#7900ff"}
              >
                Section 2
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(2);
                }}
                backgroundColor={"#d8b5ff"}
              >
                Section 2
              </SectionBox>
            )}

            {sectionState === 3 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#7900ff"}
              >
                Section 3
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(3);
                }}
                backgroundColor={"#d8b5ff"}
              >
                Section 3
              </SectionBox>
            )}
            {sectionState === 4 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#7900ff"}
              >
                Section 4
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(4);
                }}
                backgroundColor={"#d8b5ff"}
              >
                Section 4
              </SectionBox>
            )}
            {sectionState === 5 ? (
              <SectionBox
                onClick={() => {
                  setSectionState(5);
                }}
                backgroundColor={"#7900ff"}
              >
                Section 5
              </SectionBox>
            ) : (
              <SectionBox
                onClick={() => {
                  setSectionState(5);
                }}
                backgroundColor={"#d8b5ff"}
              >
                Section 5
              </SectionBox>
            )}
          </div>
          <div
            style={{
              width: "70%",
              height: "25vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SectionPage(sectionState)}
          </div>
        </div>
      </div>
    </ContentsThreeContainer>
  );
};

export default ContentsThree;
