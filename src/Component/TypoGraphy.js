import styled from "styled-components";
import "../styles/css/App.css";

import Typed from "react-typed";

import PurpleBack from "../Image/PurpleBack.png";

const TypoGraphyContainer = styled.div`
  width: 100%;
  height: 13.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-image: url(${PurpleBack});
  background-position: center center;
  background-repeat: no-repeat;
`;

const LineText = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  color: white;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TypoGraphy = () => {
  return (
    <TypoGraphyContainer>
      <div style={{ width: "55vw" }}>
        <LineText>
          <text>부트캠프 수강 후 여러분들은</text>
        </LineText>
      </div>
      <div
        style={{
          width: "55vw",
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
              width: "30vw",
              height: "3.5vw",
              border: "solid",
              borderColor: "gray",
              boxShadow: "0.1vw 0.1vw 0.1vw 0.1vw #7900ff",
              // paddingTop: "1vw", // placeholder 상하 위치 조절
              fontSize: "2vw",
            }}
          />
        </Typed>
        <LineText>
          <text style={{ marginLeft: "0.5vw" }}>가 될 수 있습니다</text>
        </LineText>
      </div>
    </TypoGraphyContainer>
  );
};

export default TypoGraphy;
