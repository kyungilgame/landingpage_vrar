import styled from "styled-components";
import "../styles/css/App.css";

import MobileHeader from "../Component/MobileHeader";
import MobileContentsOne from "../Component/MobileContentsOne";
import MobileContentsTwo from "../Component/MoblieContentsTwo";
import MobileTypoGraphy from "../Component/MobileTypoGraphy";
import MobileContentsThree from "../Component/MobileContentsThree";
import MobileContentsFour from "../Component/MobileContentsFour";
import MobileVideo from "../Component/MobileVideo";
import MobileContentsFive from "../Component/MobileContentsFive";
import MobileFAQBoard from "../Component/MobileFAQBoard";
import MobileFooter from "../Component/MobileFooter";
import MobileBottomCTABar from "../Component/MobileBottomCTABar";

import MobileKakao from "../Image/MobileKakao.png";
import MobileTell from "../Image/MobileTell.png";

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
  width: 11vw;
  height: 11vw;
  bottom: 50vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${MobileTell});
  background-position: center center;
  background-repeat: no-repeat;
`;

const LinkBoxTwo = styled.button`
  position: fixed;
  width: 11vw;
  height: 11vw;
  bottom: 37vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${MobileKakao});
  background-position: center center;
  background-repeat: no-repeat;
`;

function MobileContainer() {
  return (
    <AppContainer>
      <MobileHeader />
      <MobileContentsOne></MobileContentsOne>
      <MobileContentsTwo></MobileContentsTwo>
      <MobileTypoGraphy></MobileTypoGraphy>
      <MobileContentsThree></MobileContentsThree>
      <MobileContentsFour></MobileContentsFour>
      <MobileVideo></MobileVideo>
      <MobileContentsFive></MobileContentsFive>
      <MobileFAQBoard></MobileFAQBoard>
      <MobileFooter></MobileFooter>
      <MobileBottomCTABar></MobileBottomCTABar>
      <LinkBoxOne as={"a"} href={"tel:02-479-4050"}></LinkBoxOne>
      <LinkBoxTwo
        as={"a"}
        href={"http://pf.kakao.com/_nsNxkM/chat"}
      ></LinkBoxTwo>
    </AppContainer>
  );
}

export default MobileContainer;
