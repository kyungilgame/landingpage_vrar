import styled from "styled-components";
import "../styles/css/App.css";

import StudentOne from "../Image/StudentOne.png";
import StudentTwo from "../Image/StudentTwo.png";

const ContentsFiveContainer = styled.div`
  width: 100%;
  height: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ededed;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const WhiteBoxWrapper = styled.div`
  width: 28vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  background-color: white;
  padding: 1vw;
`;

const WhiteBoxWrapperTwo = styled.button`
  all: unset;
  width: 28vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 1vw;
  cursor: pointer;
  background-size: 100%;
  background-position: center top 0;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ContentsFive = ({ onOpenFirstModal, onOpenSecondModal }) => {
  return (
    <ContentsFiveContainer>
      <LineSizeTwo marginTop={"7vw"}>
        여러분 또래의 취업 성공담을 확인하세요
      </LineSizeTwo>
      <LineSizeOne>VR콘텐츠 전문가 수강후기</LineSizeOne>

      <div
        style={{
          width: "57vw",
          height: "25vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4vw",
        }}
      >
        <WhiteBoxWrapperTwo
          src={StudentOne}
          onClick={() => {
            onOpenFirstModal();
          }}
        >
          <text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: "1vw",
              marginTop: "75%",
            }}
          >
            열심히 하면 노력한 만큰 보답이 옵니다.
          </text>
          <text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: "1vw",
            }}
          >
            다들 열심히 해서 취업 성공하세요!
          </text>
        </WhiteBoxWrapperTwo>
        <WhiteBoxWrapperTwo
          src={StudentTwo}
          onClick={() => {
            onOpenSecondModal();
          }}
        >
          <text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: "1vw",
              marginTop: "75%",
            }}
          >
            두려움이 저를 강하게 만들었습니다.
          </text>
        </WhiteBoxWrapperTwo>
      </div>
      <div
        style={{
          width: "57vw",
          height: "13vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <WhiteBoxWrapper>
          <LineSizeThree>김찬영 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            교육과정은 일반적인 학원이랑 꽤 다르게 편성이
          </LineSizeFive>
          <LineSizeFive>
            되어 있어요. 개인적으로 배우기가 참 좋았습니다.
          </LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <LineSizeThree>홍찬영 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            밤 새면서 프로젝트를 진행한 적이 꽤 많았었는데
          </LineSizeFive>
          <LineSizeFive>
            힘든 기억도 있었지만 정말 재밌었던 소중한 경험이었습니다.
          </LineSizeFive>
        </WhiteBoxWrapper>
      </div>
      <div
        style={{
          width: "57vw",
          height: "13vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WhiteBoxWrapper>
          <LineSizeThree>임재경 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            C 언어부터 시작해 C++ C# 유니티에 관련된 넓은 지식들을
          </LineSizeFive>
          <LineSizeFive>
            배울 수 있었고, VR 프로젝트를 진행함에 있어서
          </LineSizeFive>
          <LineSizeFive>
            많은 팁과 기술들을 배웠습니다. 이끌어 주신 쌤께 정말 감사한
          </LineSizeFive>
          <LineSizeFive>마음을 가지고 갑니다.</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <LineSizeThree>김준 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            집에서의 반대에도 불구하고 제 멋대로 신청해서 가게 된
          </LineSizeFive>
          <LineSizeFive>
            학원이었지만 배워가는 것은 엄청나게 많았습니다.
          </LineSizeFive>
          <LineSizeFive>비전공자라서 시작하기 불안하다 싶으시다면</LineSizeFive>
          <LineSizeFive>
            걱정하시지 않아도 됩니다. 이 교육강의를 마지막 보루라고
          </LineSizeFive>
          <LineSizeFive>
            생각하고 최선을 다하시낟면 절대 후회하지 않으실겁니다.
          </LineSizeFive>
        </WhiteBoxWrapper>
      </div>
      <div
        style={{
          width: "57vw",
          height: "13vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WhiteBoxWrapper>
          <LineSizeThree>유시온 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            저는 고졸 비전공자에 코딩이라곤 1도 모르는 사람이었습니다.
          </LineSizeFive>
          <LineSizeFive>
            학원에 온 이유, 게임 개발로 먹고 살기 위해서 입니다.
          </LineSizeFive>
          <LineSizeFive>
            이 강의는 5개월의 짧은 기간이었지만 집중해서 게임을 만들었고,
          </LineSizeFive>
          <LineSizeFive>점점 느는 실력이 많이 느껴졌습니다.</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <LineSizeThree>홍찬영 수료생</LineSizeThree>
          <div
            style={{
              width: "100%",
              height: "0.2vw",
              backgroundColor: "#d8b5ff",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>
            약 5개월간의 짧으면 짧고 길다면 긴 수업 과정 중에서 정말
          </LineSizeFive>
          <LineSizeFive>
            많은 것을 배울 수 있었고 포트폴리오, 자기소개서 등
          </LineSizeFive>
          <LineSizeFive>
            여러 서류 작성에도 도움을 많이 받았습니다!
          </LineSizeFive>
          <LineSizeFive>기회가 된다면 주면 혹은 모르는 분들에게도</LineSizeFive>
          <LineSizeFive>정말 추천드리고 싶습니다!</LineSizeFive>
        </WhiteBoxWrapper>
      </div>
    </ContentsFiveContainer>
  );
};

export default ContentsFive;
