import styled from "styled-components";
import "../styles/css/App.css";

import React from "react";
import Faq from "react-faq-component";

const FAQBoardContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const data = {
  rows: [
    {
      title: "수강료가 정말 무료인가요?",
      content:
        "수강료는 '국민내일배움카드'를 통해 전액 국가에서 지원받아 무료입니다. 참여자께서 부담하시는 금액은 없습니다.",
    },
    {
      title: "중간에 포기하면 불이익이 있나요?",
      content:
        "질병·사고·개인사정 등 불가피한 사유 없이 중도에 훈련 수강을 그만 둔 경우 미수료, 수강 중도 포기 시에는 내일배움카드 정책에 따른 불이익이 있을 수 있습니다.",
    },
    {
      title: "지원에 제한이 있나요?",
      content:
        "현직 공무원, 사립학교 교직원, 최종학교 졸업예정자 이외의 재학생, 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상인 대기업근로자(45세 미만), 고소득 특수형태근로 종사자는 내일배움카드를 발급받을 수 없습니다. 이에 해당하지 않는 직업훈련을 희망하는 국민이라면 모두 지원 가능합니다. 다만 수강기간 내 충분한 시간적 여유와 목표의식이 필요합니다. 그러므로 재직자, 재학생 등 정규 학습 시간에 실시간으로 참여할 수 없는 경우에는 부트캠프 수강이 어려울 수 있습니다. 또한 몰입도 있는 교육환경을 위해 의지가 있는 분들을 우선 선발하고 있습니다. 개발자가 되려는 의지가 강한 분이라면 누구든지 환영합니다.",
    },
    {
      title: "수강에 필요한 준비물이 있나요?",
      content:
        "첫째, 무료수강을 위해 고용노동부에서 발급하는 ‘국민내일배움카드’를 준비하셔야 합니다.\n" +
        "둘째, 수강 등록을 하시면 강의실 내에서 비치된 컴퓨터와 교보재를 활용하여 수업에 참여할 수 있습니다. 다만, 코딩을 하는데 있어 개인 노트북이 있다면 더욱 좋습니다.\n",
    },

    {
      title: "프로그래밍을 할 줄 모른다면 지원 할 수 없나요?",
      content:
        "Coding이 처음이시군요. 질문에 답변 드리자면, 가능합니다. 최근 코딩 능력은 디지털 실무 능력을 가늠하는 중요한 요소가 되었습니다. 굴지의 대기업들도 신입 사원에게 1년 간 코딩 교육을 진행하고 있으며, 게임 분야에서는 코딩 과외를 직접 붙여줄 정도로 디지털 신입들의 코딩 역량은 초라한 수준입니다. 이는 교육 현장에서 10년~20년 된 오래된 수업 교안과 교재를 가지고 답습하듯 수업을 진행 하다보니 현장에서 필요로 하는 실무 능력을 갖추지 못했기 때문입니다. 코딩은 지식으로 배우는 것이 아니라 훈련하는 것 입니다. 본 과정은 '비 전공자'도 디지털 인재로의 기회를 열어주는 한국형 뉴딜 K-DIGITAL TRAINING 과정입니다. 일반적인 지식 습득이 아닌 기업에서 필요로 하는 문제 해결에 직접 동참하고 풀어 나감으로써 현장감 있는 디지털 실무인재로 성장하실 수 있습니다. 코딩과 친숙해지려면 프로그래밍적 사고가 습관화되어야 합니다. 때로는 문제를 뒤집어서 생각해보는 유연성도 필요하죠. 여러분은 이제 그 시작점에 서 있습니다. 검증된 커리큘럼과 철저한 코칭을 통해 고급개발자 취업에 성공하세요.",
    },
    {
      title: "기존 게임기획 과정과 어떤 차이가 있나요?",
      content:
        "유수의 게임 기업들이 게임을 기반으로 메타버스로의 확장을 본격적으로 준비하고 있는 시점에서, 본 과정은 게임 콘텐츠, 게임 시스템, 레벨 디자인, 밸런싱, 게임 시나리오 등 전통적인 게임 기획을 바탕으로 VR,AR,NFT,크리에이터 플랫폼 설계 등이 강화된 진정한 '메타버스 게임 기획자'의 양성을 목표로 강의와 실습, 프로젝트가 진행됩니다.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  // titleTextColor: "blue",
  // titleTextSize: '48px',
  // rowTitleColor: "blue",
  rowTitleTextSize: "3vw",
  // rowContentColor: 'grey',
  rowContentTextSize: "3vw",
  rowContentPaddingTop: "0.5vw",
  rowContentPaddingBottom: "0.5vw",
  rowContentPaddingLeft: "0.5vw",
  rowContentPaddingRight: "7.5vw",
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const MobileFAQBoard = () => {
  return (
    <FAQBoardContainer>
      <LineSizeOne marginTop="7vw">FAQ</LineSizeOne>
      <LineSizeThree>궁금한게 있으시다면 꼭 확인해보세요</LineSizeThree>
      <div style={{ marginBottom: "5vw" }}></div>
      <div style={{ width: "80vw" }}>
        <Faq
          data={data}
          styles={styles}
          config={{
            animate: true,
          }}
        />
      </div>
    </FAQBoardContainer>
  );
};

export default MobileFAQBoard;
