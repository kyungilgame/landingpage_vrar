import styled from "styled-components";
import "../styles/css/App.css";

import ReactPlayer from "react-player/youtube";

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 110vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  height: 90vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 2vw;
`;

const MobileVideo = () => {
  return (
    <VideoContainer>
      <LineSizeOne marginTop={"5vw"}>NHK 뉴스에 방영되었던</LineSizeOne>
      <LineSizeTwo>
        <text style={{ color: "#7900ff" }}>VR콘텐츠 전문가 과정</text>
      </LineSizeTwo>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://youtu.be/ZaBi4jfEOp8"
          width="100%"
          height="100%"
        />
      </VideoPlayWrapper>
      <LineSizeFour marginTop={"2vw"}>
        <text style={{ color: "#101010", fontSize: "3vw" }}>
          전국 4026개 훈련기관 중
        </text>
      </LineSizeFour>

      <LineSizeThree marginTop={"2vw"}>
        <div
          style={{
            width: "70vw",
            height: "6vw",
            backgroundColor: "#7900ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text style={{ color: "white" }}>
            상위 1% 내에 속하는 디지털 교육기관!
          </text>
        </div>
      </LineSizeThree>

      <div style={{ height: "15vw" }}></div>
    </VideoContainer>
  );
};

export default MobileVideo;
