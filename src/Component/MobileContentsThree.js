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
  background-color: #f4f4f4;
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
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>메타버스 바로 알기</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            메타버스 플랫폼을 배우고 이해합니다.
          </text>
        </LineTextThree>

        <LineTextFour marginTop={"2vw"}>메타버스 개념과 시장전망</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메타버스에서 발생할 수 있는 가상경제 모델에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          Agile 기반의 프로젝트 관리 환경 구축에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          로블록스에서 사용되는 Lua Script 활용에 대해 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          메타버스 플랫폼 개발에 필요한 기초 프로그래밍 학습
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>메타버스 컨텐츠의 이해</LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            메타버스 컨텐츠와 스토리텔링을 기획합니다.{" "}
          </text>
        </LineTextThree>

        <LineTextFour marginTop={"2vw"}>
          컨셉 기획서와 시나리오 작성
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>세계관 캐릭터 설정</LineTextFour>
        <LineTextFour marginTop={"1vw"}>마케팅 기초 이론과 실무</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          마케팅 제안과 프레젠테이션
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          개발 프로젝트의 관리 요소 분석
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>
          메타버스 시스템과 UI/UX 기획
        </LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            로블록스 스튜디오의 스크립트 활용과 공간을 구축합니다.
          </text>
        </LineTextThree>

        <LineTextFour marginTop={"2vw"}>디바이스 환경의 이해</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          컨텐츠와 플랫폼의 시스템 설계
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>컨텐츠의 UI/UX 분석</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          컨텐츠와 플랫폼의 UI 요소 설계
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 4) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>
          Unity 3D 엔진과 공간 ·서비스의 기획/운영
        </LineTextFive>
        <LineTextThree>
          <text style={{ color: "#0d7377" }}>
            Unity 3D 개발 환경을 이해합니다.
          </text>
        </LineTextThree>

        <LineTextSix marginTop={"2vw"}>
          플랫폼 공간 ·도구 ·공간 이벤트 ·밸런스 설계
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          블록체인과 NFT의 이해, 활용, 설계
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>
          메타버스 서비스의 운영 기획과 플랫폼 설계
        </LineTextSix>
        <LineTextSix marginTop={"1vw"}>메타버스 서비스 개선안 도출</LineTextSix>
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
      <LineTextOne marginTop={"5vw"}>불필요한 내용은 빼고</LineTextOne>
      <LineTextOne>
        <text style={{ color: "#0d7377" }}>취업에 꼭 필요한 내용</text>으로
      </LineTextOne>
      <LineTextOne> 채웠습니다</LineTextOne>
      <div
        style={{
          backgroundColor: "#0d7377",
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
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
            }}
          >
            게임 개발사 대표가
          </text>
          <text
            style={{
              color: "#aecbcc",
              letterSpacing: "0.5vw",
              wordSpacing: "1vw",
              marginLeft: "1vw",
            }}
          >
            직접 설계한 40주 커리큘럼
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
              height: "15vw",
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
                  backgroundColor={"#0d7377"}
                >
                  Section 1
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(1);
                  }}
                  backgroundColor={"#aecbcc"}
                >
                  Section 1
                </SectionBox>
              )}
              {sectionState === 2 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(2);
                  }}
                  backgroundColor={"#0d7377"}
                >
                  Section 2
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(2);
                  }}
                  backgroundColor={"#aecbcc"}
                >
                  Section 2
                </SectionBox>
              )}
              {sectionState === 3 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(3);
                  }}
                  backgroundColor={"#0d7377"}
                >
                  Section 3
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(3);
                  }}
                  backgroundColor={"#aecbcc"}
                >
                  Section 3
                </SectionBox>
              )}
              {sectionState === 4 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(4);
                  }}
                  backgroundColor={"#0d7377"}
                >
                  Section 4
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(4);
                  }}
                  backgroundColor={"#aecbcc"}
                >
                  Section 4
                </SectionBox>
              )}
            </div>
            <div
              style={{
                width: "100%",
                height: "7vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {sectionState === 5 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(5);
                  }}
                  backgroundColor={"#0d7377"}
                >
                  Section 5
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(5);
                  }}
                  backgroundColor={"#aecbcc"}
                >
                  Section 5
                </SectionBox>
              )}
              {sectionState === 6 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(6);
                  }}
                  backgroundColor={"#0d7377"}
                  style={{ marginLeft: "4vw" }}
                >
                  Section 6
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(6);
                  }}
                  backgroundColor={"#aecbcc"}
                  style={{ marginLeft: "4vw" }}
                >
                  Section 6
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
