import styled from "styled-components";
import "../styles/css/App.css";

import ReactPlayer from "react-player/youtube";

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const VideoPlayWrapper = styled.div`
  width: 50vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 2vw;
`;

const Video = () => {
  return (
    <VideoContainer>
      <LineSizeTwo marginTop={"5vw"}>NHK뉴스에 방영되었던</LineSizeTwo>
      <LineSizeOne>
        <text style={{ color: "#7900ff" }}>VR콘텐츠 전문가 과정</text>
      </LineSizeOne>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://youtu.be/ZaBi4jfEOp8"
          width="50vw"
          height="30vw"
        />
      </VideoPlayWrapper>
      <LineSizeFour marginTop={"2vw"}>
        <text style={{ color: "#101010", fontSize: "1.5vw" }}>
          전국 4026개 훈련기관 중
        </text>
      </LineSizeFour>

      <LineSizeThree>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "47vw",
              height: "3vw",
              backgroundColor: "#7900ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5vw",
            }}
          >
            <text style={{ color: "white" }}>
              상위 1% 내에 속하는 디지털 교육기관!
            </text>
          </div>
        </div>
      </LineSizeThree>
    </VideoContainer>
  );
};

export default Video;
