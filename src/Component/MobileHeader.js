import styled from "styled-components";
import "../styles/css/App.css";
import Logo from "../Image/logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 9vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
`;

const HeaderRight = styled.button`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  height: 5vw;
  width: 18vw;
  color: white;
  border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d7377;
  text-decoration: none;
  margin-right: 3vw;
`;

const HeaderLeft = styled.div`
  width: 15vw;
  height: 8vw;
  background-size: contain;
  background-image: url(${Logo});
  background-position: center center;
  background-repeat: no-repeat;
  margin-left: 5vw;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft></HeaderLeft>

      <HeaderRight as={"a"} href={"http://www.kiweb.or.kr/?view=pc"}>
        홈페이지 이동 {">"}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
