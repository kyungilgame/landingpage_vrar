import React, { useState } from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const ContentsThreeContainer = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const LineTextOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFive = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const SectionBox = styled.button`
  font-family: "Pretendard-ExtraBold";
  width: 20vw;
  height: 4.5vw;
  border-radius: 1vw;
  border-color: #aecbcc;
  font-size: 3vw;
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
          width: "80%",
          height: "100%",
          backgroundColor: "#f4f4f4",
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
          width: "80%",
          height: "100%",
          backgroundColor: "#f4f4f4",
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
          width: "80%",
          height: "100%",
          backgroundColor: "#f4f4f4",
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
          width: "80%",
          height: "100%",
          backgroundColor: "#f4f4f4",
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
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>참여기업 프로젝트</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>기업 요구사항에 맞추어</text>
        </LineTextThree>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            '상용화' 프로젝트를 진행합니다.
          </text>
        </LineTextThree>
        <LineTextFour marginTop={"2vw"}>
          협약기업 요구사항 분석 및 설계
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          분석한 데이터를 기반으로 메타버스 플랫폼 개발 환경 만들기
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          팀 단위로 협약기업에서 제시한 요구사항을 바탕으로 메타버스 프로젝트를
          제작
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          협약기업이 참관하고 프로젝트 제작 발표회 진행
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 6) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>취업을 위한 준비</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            '프로젝트 결과물'을 기반으로 취업 컨설팅을
          </text>
        </LineTextThree>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>통해 취업을 준비합니다.</text>
        </LineTextThree>
        <LineTextSix marginTop={"2vw"}>
          이력서 {"&"} 자기소개서 작성
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>취업용 포트폴리오 문서 작성</LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          프로젝트 결과물 기반 프로필 문서 작성
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>기술 면접 준비</LineTextSix>
        <LineTextSix marginTop={"1vw"}>기업 코딩 테스트 준비</LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          기업 가이드라인 제시 및 정보 제공
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          최신 입사 트렌드를 반영한 현업인 초청 모의면접
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          MOU 및 다양한 루트를 통한 취업 연계
        </LineTextSix>
      </div>
    );
  }
};

const MobileContentsThree = () => {
  const [sectionState, setSectionState] = useState(1);
  return (
    <ContentsThreeContainer>
      <LineTextOne marginTop={"5vw"}>
        국내 다양한 직종으로 취업가능한
      </LineTextOne>
      <LineTextOne>
        <text style={{ color: "#7900ff" }}>'VR콘텐츠 제작 전문가'</text>커리큘럼
      </LineTextOne>

      <div
        style={{
          backgroundColor: "#7900ff",
          width: "100%",
          height: "5vw",
          textAlign: "center",
          paddingTop: "0.2vw",
          marginTop: "0.5vw",
        }}
      >
        <LineTextTwo>
          <text
            style={{
              color: "white",
            }}
          >
            불필요한 과정은 빼고 취업에 꼭 필요한 내용들로만 채웠습니다
          </text>
        </LineTextTwo>
        <div
          style={{
            width: "100%",
            height: "70vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "10vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "7vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
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
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "50vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {SectionPage(sectionState)}
          </div>
        </div>
      </div>
    </ContentsThreeContainer>
  );
};

export default MobileContentsThree;
