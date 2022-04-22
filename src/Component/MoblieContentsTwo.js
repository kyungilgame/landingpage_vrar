import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

import NewImageOne from "../Image/NewImageOne.png";
import NewImageTwo from "../Image/NewImageTwo.png";
import NewImageThree from "../Image/NewImageThree.png";
import NewImageFour from "../Image/NewImageFour.png";
import NewImageFive from "../Image/NewImageFive.png";

import BackVideoFile from "../Video/flefibird.mp4";

import NewGlobeIamge from "../Image/NewGlobeIamge.png";
import NewRoomImage from "../Image/NewRoomImage.png";
import NewFireImage from "../Image/NewFireImage.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 940vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 30vw;
  height: 10vw;
  background-size: 15vw 7vw;
  background-position: center center;
  background-repeat: no-repeat;
  border: solid;
  border-color: #ededed;
  border-radius: 2vw;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ImageContainerTwo = styled.div`
  width: 30vw;
  height: 10vw;
  background-size: 18vw 7vw;
  background-position: center center;
  background-repeat: no-repeat;
  border: solid;
  border-color: #ededed;
  border-radius: 2vw;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;
const MiddleLineContainer = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vw;
  margin-top: 8vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 60vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #7900ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  margin-top: 3vw;
  background-size: 10vw 2vw;
  background-image: url(${ShortLine});
  background-position: right 50% bottom 69%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 60vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #7900ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 15vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 63% bottom 68%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const GreenBoxWrapperThree = styled.div`
  width: 60vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #7900ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 10vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 65% bottom 68%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const ImageContainerNew = styled.div`
  width: 70%;
  height: 250vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PurpleBox = styled.div`
  width: 70%;
  height: 10%;
  background-color: #7900ff;
  margin-bottom: 3vw;
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const ImageItemWrapper = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const LastContentsInnerBox = styled.div`
  width: 60%;
  height: 25vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSeven = styled.div`
  font-family: "Pretendard-Light";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const InnerTextSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 7vw;
  color: #7900ff;
`;

const InnerTextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  color: black;
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  height: 160vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #ededed;
`;

const InnerImageWrapper = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const NewTextSize = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 4vw;
  color: black;
`;

const NewTextSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  color: black;
`;

const MobileContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"5vw"}>
        <text style={{ color: "#7900ff" }}>VR제작자는</text>
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#7900ff" }}>취업의 확장성이 좋아요</text>
      </LineSizeOne>
      <div
        style={{
          backgroundColor: "black",
          width: "70%",
          height: "7vw",
          borderRadius: "3.5vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineSizeTwo>
          <text style={{ color: "white" }}>직전</text>
          <text style={{ color: "#fdff6b" }}> 취업률 83%, </text>
          <text style={{ color: "white" }}>압도적인 결과!</text>
        </LineSizeTwo>
      </div>
      <ImageContainerNew>
        <ImageItemWrapper src={NewImageFive}>
          <PurpleBox>게임 콘텐츠</PurpleBox>
        </ImageItemWrapper>
        <ImageItemWrapper src={NewImageFour}>
          <PurpleBox>시뮬레이션</PurpleBox>
        </ImageItemWrapper>
        <ImageItemWrapper src={NewImageTwo}>
          <PurpleBox>재난 방재</PurpleBox>
        </ImageItemWrapper>
        <ImageItemWrapper src={NewImageThree}>
          <PurpleBox>의료 재활</PurpleBox>
        </ImageItemWrapper>
        <ImageItemWrapper src={NewImageOne}>
          <PurpleBox>가상증강콘텐츠</PurpleBox>
        </ImageItemWrapper>
      </ImageContainerNew>
      <LineSizeThree marginTop={"2vw"}>
        <text style={{ color: "black" }}>
          가상의 공간이 활용되어 지는{`  `}
        </text>
      </LineSizeThree>
      <LineSizeThree>
        <text style={{ color: "#7900ff" }}>모든 직군에 취업이 가능</text>
        <text style={{ color: "black" }}>합니다.</text>
      </LineSizeThree>
      <LastContentsInnerBox style={{ marginTop: "5vw" }}>
        <LineSizeFour>
          <text style={{ color: "#7900ff" }}>FOCUS</text>
        </LineSizeFour>
        <LineSizeSeven marginTop={"1vw"}>
          <text style={{ color: "white" }}>국내 최단기 취업 솔루션</text>
        </LineSizeSeven>
        <LineSizeSeven>
          <text style={{ color: "white" }}>24주로 완성</text>
        </LineSizeSeven>
      </LastContentsInnerBox>
      <LastContentsInnerBox style={{ marginTop: "2vw" }}>
        <LineSizeFour>
          <text style={{ color: "#7900ff" }}>TREND</text>
        </LineSizeFour>
        <LineSizeSeven marginTop={"1vw"}>
          <text style={{ color: "white" }}>비대면이 성장하는 시대</text>
        </LineSizeSeven>
        <LineSizeSeven>
          <text style={{ color: "white" }}>가상증강 콘텐츠 전문가</text>
        </LineSizeSeven>
      </LastContentsInnerBox>
      <LastContentsInnerBox style={{ marginTop: "2vw" }}>
        <LineSizeFour>
          <text style={{ color: "#7900ff" }}>SECRET</text>
        </LineSizeFour>
        <LineSizeSeven marginTop={"1vw"}>
          <text style={{ color: "white" }}>단기간 취업 비결 공개</text>
        </LineSizeSeven>
        <LineSizeSeven>
          <text style={{ color: "white" }}>
            자소서부터 기술문서까지 완벽하게
          </text>
        </LineSizeSeven>
      </LastContentsInnerBox>
      <div
        style={{
          width: "100%",
          height: "380vw",
          backgroundColor: "#ededed",
          marginTop: "10vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <InnerTextSizeTwo style={{ marginTop: "5vw" }}>
          직접 구동되어지고 체험하는 과정으로
        </InnerTextSizeTwo>
        <InnerTextSizeTwo>
          비전공자도 재미있게 접근하실 수 있습니다.
        </InnerTextSizeTwo>
        <InnerTextSizeOne style={{ marginTop: "2vw" }}>
          코딩을 재미있게
        </InnerTextSizeOne>
        <InnerTextSizeOne>배울 수 있어요</InnerTextSizeOne>
        <div
          style={{
            backgroundColor: "black",
            width: "47%",
            height: "7vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10vw",
            fontFamily: "Pretendard-Regular",
            fontSize: "3vw",
            color: "white",
            marginTop: "5vw",
          }}
        >
          플레피 버드 분석하기
        </div>
        <VideoPlayWrapper>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <video loop autoPlay muted width={"70%"} style={{}}>
              <source src={BackVideoFile} type="video/mp4" />
            </video>
          </div>
        </VideoPlayWrapper>
        <div
          style={{
            width: "70%",
            height: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Pretendard-Regular",
            fontSize: "3vw",
            padding: "3vw",
            marginTop: "1vw",
          }}
        >
          <text>게임은 복합적인 구조를 가지고 있어</text>
          <text>각기 다른 시뮬레이션에 필요한 기술들을 배워</text>
          <text>적용할 수 있습니다.</text>
        </div>
        <div
          style={{
            width: "80%",
            height: "150vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InnerImageWrapper src={NewRoomImage}>
            <div
              style={{
                width: "100%",
                height: "15%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                color: "white",
                fontFamily: "Pretendard-Regular",
                fontSize: "3vw",
              }}
            >
              가상 테마파크 공간 구현
            </div>
          </InnerImageWrapper>
          <InnerImageWrapper src={NewGlobeIamge}>
            <div
              style={{
                width: "100%",
                height: "15%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                color: "white",
                fontFamily: "Pretendard-Regular",
                fontSize: "3vw",
              }}
            >
              촉각을 느끼는 VR글러브
            </div>
          </InnerImageWrapper>
          <InnerImageWrapper src={NewFireImage}>
            <div
              style={{
                width: "100%",
                height: "15%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                color: "white",
                fontFamily: "Pretendard-Regular",
                fontSize: "3vw",
              }}
            >
              AR 소방 시뮬레이션
            </div>
          </InnerImageWrapper>
        </div>
      </div>
      <NewTextSize style={{ marginTop: "5vw", fontSize: "4vw" }}>
        개발자에 대한 대우가 좋아요
      </NewTextSize>
      <div
        style={{
          width: "70vw",
          height: "7vw",
          backgroundColor: "#7900ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewTextSizeTwo style={{ fontSize: "6vw" }}>
          <text style={{ color: "white" }}>취업자 </text>
          <text style={{ color: "#fdff6b" }}>평균 연봉 3700만원 </text>
        </NewTextSizeTwo>
      </div>
      <NewTextSize style={{ fontSize: "3vw", marginTop: "1vw" }}>
        VR수료생 평균 연봉입니다
      </NewTextSize>
      <NewTextSize style={{ fontSize: "3vw", marginTop: "10vw" }}>
        초보자인 여러분도 디지털 인재로 취업할 수 있도록
      </NewTextSize>
      <NewTextSizeTwo style={{}}>
        <text style={{ color: "#7900ff" }}>
          경일과 고용노동부가 준비했습니다
        </text>
      </NewTextSizeTwo>
      <div
        style={{
          width: "80%",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerTwo src={MinistryImage}></ImageContainerTwo>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "10%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>부트캠프 수강생을 위한 </text>
          <text style={{ color: "#7900ff" }}>혜택!</text>
        </LineSizeOne>
        <div
          style={{ width: "10%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>수강료 0원</LineSizeFive>
          <div
            style={{
              width: "70%",
              height: "0.5vw",
              backgroundColor: "#ededed",
              marginTop: "2vw",
            }}
          ></div>
          <LineSizeSix marginTop={"2vw"}>
            <text>24주간 무료로 훈련을 받고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>VR콘텐츠 전문가로 취업하세요</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>실무중심 프로젝트</LineSizeFive>
          <div
            style={{
              width: "70%",
              height: "0.5vw",
              backgroundColor: "#ededed",
              marginTop: "2vw",
            }}
          ></div>
          <LineSizeSix marginTop={"3vw"}>
            <text>실무중심 프로젝트에 직접 참여하고 </text>
          </LineSizeSix>
          <LineSizeSix>
            <text>Agile기법으로 관리 Git툴을 활용하여</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>업무체계를 구축할 수 있습니다.</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperThree>
          <LineSizeFive marginTop={"5vw"}>직전 취업률 83%</LineSizeFive>
          <LineSizeFive>체계적인 취업관리 시스템</LineSizeFive>
          <div
            style={{
              width: "70%",
              height: "0.5vw",
              backgroundColor: "#ededed",
              marginTop: "1vw",
            }}
          ></div>
          <LineSizeSix marginTop={"2vw"}>
            <text>프로필, 기술이력서, 포트폴리오</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>면접준비까지 완벽하게 준비할 수 있습니다.</text>
          </LineSizeSix>
        </GreenBoxWrapperThree>
      </GreenBoxContainer>
    </ContentsTwoContainer>
  );
};

export default MobileContentsTwo;
