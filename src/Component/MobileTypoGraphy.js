import styled from "styled-components";
import "../styles/css/App.css";

import Typed from "react-typed";

import MobilePurpleBack from "../Image/MobilePurpleBack.png";

const TypoGraphyContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7900ff;
  background-size: contain;
  background-image: url(${MobilePurpleBack});
  background-position: center center;
  background-repeat: no-repeat;
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
        <LineText style={{ color: "white" }}>
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
            "가상증강현실 콘텐츠 제작 전문가",
            "재난,방재,건설 콘텐츠 제작 전문가",
            "의료,재활 콘텐츠 제작 전문가",
            "게임 콘텐츠 제작 전문가",
            "시뮬레이션 콘텐츠 제작 전문가",
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
              boxShadow: "0.1vw 0.1vw 0.1vw 0.1vw #7900ff",
              paddingTop: "1vw", // placeholder 상하 위치 조절
              fontSize: "3.5vw",
            }}
          />
        </Typed>
        <LineText style={{ color: "white" }}>
          <text style={{ marginLeft: "0.5vw" }}>가</text>
        </LineText>
      </div>
      <LineText style={{ color: "white" }}>
        <text>될 수 있습니다!</text>
      </LineText>
    </TypoGraphyContainer>
  );
};

export default MobileTypoGraphy;
