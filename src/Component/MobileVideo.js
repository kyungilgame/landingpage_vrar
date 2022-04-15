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
  font-size: 7vw;
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
  background-color: #f4f4f4;
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
      <LineSizeOne marginTop={"5vw"}>도전하세요!</LineSizeOne>
      <LineSizeTwo>
        여러분도 <text style={{ color: "#0d7377" }}>할 수 있습니다</text>
      </LineSizeTwo>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://youtu.be/dR8YaZLBmTQ"
          width="100%"
          height="100%"
        />
      </VideoPlayWrapper>
      <LineSizeFour marginTop={"3vw"}>
        <text style={{ color: "#353535" }}>메타버스 신산업 전문가 </text>
        <text style={{ color: "#101010" }}>
          4만명, 육성 전문기업 220개 지원
        </text>
      </LineSizeFour>
      <LineSizeFour>
        <text style={{ color: "#353535", marginLeft: "0.5vw" }}>
          관계부처 합동 '메타버스 신산업 선도전략'
        </text>
      </LineSizeFour>
      <LineSizeThree marginTop={"2vw"}>
        <div
          style={{
            width: "70vw",
            height: "6vw",
            backgroundColor: "#101010",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text style={{ color: "#00ffd6" }}>K-DIGITAL TRAINING</text>
        </div>
      </LineSizeThree>

      <div style={{ height: "15vw" }}></div>
    </VideoContainer>
  );
};

export default MobileVideo;
