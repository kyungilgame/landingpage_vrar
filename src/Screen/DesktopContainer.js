import styled from "styled-components";
import "../styles/css/App.css";

import Header from "../Component/Header";
import ContentsOne from "../Component/ContentsOne";
import ContentsTwo from "../Component/ContentsTwo";
import ContentsThree from "../Component/ContentsThree.js";
import ContentsFour from "../Component/ContentsFour";
import ContentsFive from "../Component/ContentsFive";
import Video from "../Component/Video";
import TypoGraphy from "../Component/TypoGraphy";
import FAQBoard from "../Component/FAQBoard";
import Footer from "../Component/Footer";
import BottomCTABar from "../Component/BottomCTABar";
import BackVideo from "../Function/BackVideo";

import KakaoImage from "../Image/kakaoImage.png";
import CallImage from "../Image/CallImage.png";

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LinkBoxOne = styled.button`
  position: fixed;
  width: 8vw;
  height: 9vw;
  bottom: 20vw;
  margin-right: 80vw;
  background-size: contain;
  background-image: url(${CallImage});
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 10;
`;

const LinkBoxTwo = styled.button`
  position: fixed;
  width: 8vw;
  height: 9vw;
  bottom: 10vw;
  margin-right: 80vw;
  background-size: contain;
  background-image: url(${KakaoImage});
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 10;
`;

function DesktopContainer({ onOpenFirstModal, onOpenSecondModal }) {
  return (
    <AppContainer>
      <Header />
      <BackVideo />
      <ContentsOne />
      <ContentsTwo />
      <ContentsThree />
      <TypoGraphy />
      <ContentsFour />
      <Video />
      <ContentsFive
        onOpenFirstModal={onOpenFirstModal}
        onOpenSecondModal={onOpenSecondModal}
      />
      <FAQBoard />
      <Footer />
      <BottomCTABar />
      <LinkBoxOne
        as={"a"}
        href={"http://www.kiweb.or.kr/?view=pc"}
      ></LinkBoxOne>
      <LinkBoxTwo
        as={"a"}
        href={"http://pf.kakao.com/_nsNxkM/chat"}
      ></LinkBoxTwo>
    </AppContainer>
  );
}

export default DesktopContainer;
