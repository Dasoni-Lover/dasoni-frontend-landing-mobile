import React from "react";
import styled, { keyframes } from "styled-components";
import ImgFrame from "../assets/img-frame.svg";
import ImgLogo from "../assets/img-logo.svg";
import ImgHouse from "../assets/img-house.svg";
import { InlineReserveButton } from "./FloatingReserveButton";

function Header({ inlineRef, onReserveClick }) {
  return (
    <HeaderContainer>
      <FrameImg src={ImgFrame} />
      <LogoImg src={ImgLogo} />
      <Title>
        순우리말로 사랑하는 사람을 뜻하는 다소니는
        <br />
        사랑하는 사람을 추모하는 <b>온라인 추모 공간</b>입니다
      </Title>
      <HouseImg src={ImgHouse} />
      <ButtonWrapper>
        <InlineReserveButton ref={inlineRef} onClick={onReserveClick} />
      </ButtonWrapper>
    </HeaderContainer>
  );
}

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floaty = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  padding: 60px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
      106.34% 80.72% at 49.87% 69.12%,
      #fff 69.31%,
      rgba(255, 230, 199, 0.63) 89.27%
    ),
    #fff;
  justify-content: space-between;
`;

const FrameImg = styled.img`
  margin-bottom: 25px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
`;

const LogoImg = styled.img`
  margin-bottom: 15px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.15s;
`;

const Title = styled.div`
  color: var(--50, #7a7a7a);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 23.04px */
  margin-bottom: 47px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.3s;
`;

const HouseImg = styled.img`
  margin-bottom: 45px;
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards,
    ${floaty} 2s ease-in-out 0.9s infinite;
  animation-delay: 0.45s, 0.9s;
`;

const ButtonWrapper = styled.div`
  opacity: 0;
  animation: ${fadeUp} 0.55s ease forwards;
  animation-delay: 0.6s;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Header;
