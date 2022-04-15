import styled from "styled-components";
import "../styles/css/App.css";

import Typed from "react-typed";

const TypoGraphyContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00ffd6;
`;

const LineText = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const MobileTypoGraphy = () => {
  return (
    <TypoGraphyContainer>
      <div style={{ width: "60vw", marginLeft: "8vw" }}>
        <LineText>
          <text>부트캠프 수강 후 여러분들은</text>
        </LineText>
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          marginTop: "0.5vw",
        }}
      >
        <Typed
          strings={[
            "메타버스 건축가",
            "아바타 플랫폼 기획자",
            "XR콘텐츠 기획자",
            "융합 복합 콘텐츠 기획자",
            "맞춤형 게임 프로그래머",
            "게임 기획자",
            "메타버스 크리에이터",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            style={{
              width: "50vw",
              height: "6vw",
              border: "solid",
              borderColor: "gray",
              boxShadow: "0.1vw 0.1vw 0.1vw 0.1vw #00ffd6",
              paddingTop: "1vw", // placeholder 상하 위치 조절
              fontSize: "4vw",
            }}
          />
        </Typed>
        <LineText>
          <text style={{ marginLeft: "0.5vw" }}>가</text>
        </LineText>
      </div>
      <LineText>
        <text>될 수 있습니다!</text>
      </LineText>
    </TypoGraphyContainer>
  );
};

export default MobileTypoGraphy;
