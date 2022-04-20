import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";
import BlackLabel from "../Image/BlackLabel.png";

import NewImageOne from "../Image/NewImageOne.png";
import NewImageTwo from "../Image/NewImageTwo.png";
import NewImageThree from "../Image/NewImageThree.png";
import NewImageFour from "../Image/NewImageFour.png";
import NewImageFive from "../Image/NewImageFive.png";

import NewGlobeIamge from "../Image/NewGlobeIamge.png";
import NewRoomImage from "../Image/NewRoomImage.png";
import NewFireImage from "../Image/NewFireImage.png";
import NewBirdImage from "../Image/NewBirdImage.png";

import ReactPlayer from "react-player/youtube";

import BackVideoFile from "../Video/flefibird.mp4";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 230vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeOnePlus = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.7vw;
  color: white;
  width: 50vw;
  height: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${BlackLabel});
  background-size: 50vw 2.5vw;
  background-position: right 50% bottom 100%;
  background-repeat: no-repeat;
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSeven = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 20vw;
  height: 8vw;
  background-size: 10vw 5vw;
  background-position: center center;
  background-repeat: no-repeat;
  border: solid;
  border-color: #ededed;
  border-radius: 2vw;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }};
`;

const ImageContainerTwo = styled.div`
  width: 20vw;
  height: 8vw;
  background-size: 15vw 5vw;
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
  margin-top: 5vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
  margin-top: 5vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 25vw;
  height: 15vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #7900ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 6vw 3vw;
  background-image: url(${ShortLine});
  background-position: right 50% bottom 70%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 25vw;
  height: 15vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #7900ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 12vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 66% bottom 67%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const ContentsBoxContainer = styled.div`
  width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3vw;
`;

const BlackBoxWrapper = styled.div`
  width: 26vw;
  height: 6vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastContentsWrapper = styled.div`
  width: 100%;
  height: 20vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LastContentsInnerBox = styled.div`
  width: 20vw;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainerNew = styled.div`
  width: 90%;
  height: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageItemWrapper = styled.div`
  width: 18%;
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

const PurpleBox = styled.div`
  width: 80%;
  height: 20%;
  background-color: #7900ff;
  margin-bottom: 1vw;
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.1vw 0.1vw 1vw #7900ff;
`;

const NewContentsWrapper = styled.div`
  width: 100%;
  height: 70vw;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InnerTextSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  color: #7900ff;
  margin-top: 4vw;
`;

const InnerTextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.8vw;
  color: black;
`;

const InnerImageWrapper = styled.div`
  width: 75%;
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

const NewTextSizeThree = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  color: black;
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #ededed;
  margin-top: 2vw;
`;

const ContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"5vw"}>
        <text style={{ color: "#7900ff" }}>VR제작자는</text>
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#7900ff" }}>취업의 확장성이 좋아요</text>
      </LineSizeOne>
      <LineSizeOnePlus marginTop={"3vw"}>
        <text style={{ marginTop: "0.3vw" }}>
          직전{`  `}
          <text style={{ color: "#fdff6b" }}>취업률 83%, </text> 압도적인 결과!
        </text>
      </LineSizeOnePlus>
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

      <LastContentsWrapper>
        <LineSizeThree marginTop={"2vw"}>
          <text style={{ color: "black" }}>
            가상의 공간이 활용되어 지는{`  `}
          </text>
          <text style={{ color: "#7900ff" }}>모든 직군에 취업이 가능</text>
          <text style={{ color: "black" }}>합니다.</text>
        </LineSizeThree>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "65vw",
            height: "11vw",
            marginTop: "2vw",
          }}
        >
          <LastContentsInnerBox>
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
          <LastContentsInnerBox>
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
          <LastContentsInnerBox>
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
        </div>
      </LastContentsWrapper>
      <NewContentsWrapper>
        <InnerTextSizeOne>코딩을 재미있게 배울 수 있어요</InnerTextSizeOne>
        <InnerTextSizeTwo>
          직접 구동되어지고 체험하는 과정으로 비전공자도 재미있게 접근하실 수
          있습니다.
        </InnerTextSizeTwo>
        <div
          style={{
            width: "60%",
            height: "80%",
            marginTop: "3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "95%",
              height: "8%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                width: "47%",
                height: "70%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10vw",
                fontFamily: "Pretendard-Regular",
                fontSize: "2vw",
                color: "white",
              }}
            >
              플레피 버드 분석하기
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
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
                    fontSize: "1.2vw",
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
                    fontSize: "1.2vw",
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
                    fontSize: "1.2vw",
                  }}
                >
                  AR 소방 시뮬레이션
                </div>
              </InnerImageWrapper>
            </div>
          </div>
          <div style={{ width: "100%", height: "5vw", display: "flex" }}>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Pretendard-Regular",
                fontSize: "1.2vw",
                padding: "3vw",
                marginTop: "1vw",
              }}
            >
              <text>게임은 복합적인 구조를 가지고 있어</text>
              <text>각기 다른 시뮬레이션에 필요한 기술들을 배워</text>
              <text>적용할 수 있습니다.</text>
            </div>
          </div>
        </div>
      </NewContentsWrapper>
      <NewTextSize style={{ marginTop: "5vw" }}>
        개발자에 대한 대우가 좋아요
      </NewTextSize>
      <div
        style={{
          width: "60vw",
          height: "5vw",
          backgroundColor: "#7900ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NewTextSizeTwo>
          <text style={{ color: "white" }}>취업자 </text>
          <text style={{ color: "#fdff6b" }}>평균 연봉 3700만원 </text>
        </NewTextSizeTwo>
      </div>
      <NewTextSizeThree>VR수료생 평균 연봉입니다</NewTextSizeThree>
      <NewTextSizeThree style={{ marginTop: "10vw" }}>
        초보자인 여러분도 디지털 인재로 취업할 수 있도록
      </NewTextSizeThree>
      <LineSizeOne style={{ fontSize: "5vw" }}>
        <text style={{ color: "#7900ff" }}>
          경일과 고용노동부가 준비했습니다.
        </text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
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
      <MiddleLineContainer style={{ marginTop: "10vw" }}>
        <div
          style={{ width: "25%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>부트캠프 수강생을 위한 </text>
          <text style={{ color: "#7900ff" }}>혜택!</text>
        </LineSizeOne>
        <div
          style={{ width: "25%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"3vw"}>수강료 0원</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>24주간 무료로 훈련을 받고</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>VR컨텐츠 전문가로 취업하세요</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"3vw"}>실무중심 프로젝트</LineSizeFive>
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
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"3vw"}>직접 취업률 83%</LineSizeFive>
          <LineSizeFive>체계적인 취업관리 시스템</LineSizeFive>

          <LineSizeSix marginTop={"0.5vw"}>
            <text>프로필, 기술이력서, 포트폴리오</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>면접준비까지 완벽하게 준비할 수 있습니다.</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
      </GreenBoxContainer>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
