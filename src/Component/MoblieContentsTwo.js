import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 185vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3vw;
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
  font-size: 1.5vw;
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
  width: 15vw;
  height: 15vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
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
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  margin-top: 3vw;
  background-size: 7vw 1.5vw;
  background-image: url(${ShortLine});
  background-position: right 50% bottom 69%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
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
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperThree = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
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
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const MobileContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"6vw"}>
        <text style={{ color: "#353535" }}>왜, 메타버스인가요?🤔</text>
      </LineSizeOne>
      <LineSizeTwo marginTop={"3vw"}>
        <text>넷마블 메타버스엔터테인먼트, 카카오엔터와 파트너십 구축</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>
          [단독] 넥슨도 '메타버스 스튜디오' 가세…YG·네이버 합작사에 150억 투자
        </text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>블리자드 인수한 MS, 종착점은 '메타버스'</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>엔씨소프트, 新 전성기 위한 '메타버스' 세계 구축 박차</text>
      </LineSizeTwo>
      <LineSizeOne marginTop={"5vw"}>
        게임 업계의 전통 강자, 검증된 명가 KGA
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>
          최고의 게임 기획자로 만들어 드립니다.
        </text>
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>믿고 따라오세요!🚀</text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
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
        <ImageContainerOne src={MinistryImage}></ImageContainerOne>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>메타버스의 </text>
          <text style={{ color: "#0d7377" }}>초월적 범용성!</text>
        </LineSizeOne>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>게임</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>실감 기술을 통해</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>몰입감이 극대화되는</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>게임 컨텐츠 제작</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>대체/확장/초월 자아</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>아바타를 통해 </text>
          </LineSizeSix>
          <LineSizeSix>
            <text>현실의 경험을 확장하고,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>시공간의 제약을 넘어</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>협업과 소통</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperThree>
          <LineSizeFive marginTop={"5vw"}>블록체인과 NFT</LineSizeFive>

          <LineSizeSix marginTop={"3vw"}>
            <text>디지털 자산의 생산과 유통,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>플랫폼 간 상호 연동의 형태로 진화</text>
          </LineSizeSix>
        </GreenBoxWrapperThree>
      </GreenBoxContainer>
    </ContentsTwoContainer>
  );
};

export default MobileContentsTwo;
