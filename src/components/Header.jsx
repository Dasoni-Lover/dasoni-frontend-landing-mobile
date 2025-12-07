import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoArea>
        <LogoHouse>🏠</LogoHouse>
        <LogoText>
          <LogoTitle>다소니</LogoTitle>
          <LogoSub>추억을 머무르게 하는 작은 추모관</LogoSub>
        </LogoText>
      </LogoArea>
      <HeaderCTA>새로 추모관 만들기</HeaderCTA>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 1.25rem 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  background: radial-gradient(
      106.34% 80.72% at 49.87% 69.12%,
      #fff 69.31%,
      rgba(255, 230, 199, 0.63) 89.27%
    ),
    #fff;
  justify-content: space-between;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoHouse = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #ffe0b2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #ff8a3d;
`;

const LogoSub = styled.div`
  font-size: 0.7rem;
  color: #9f8b78;
`;

const HeaderCTA = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(90deg, #ffb86c, #ff7a7a);
  box-shadow: 0 4px 12px rgba(255, 138, 61, 0.45);
`;

export default Header;
