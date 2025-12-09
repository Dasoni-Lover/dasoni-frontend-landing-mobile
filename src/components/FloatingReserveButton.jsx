import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
function FloatingReserveButton({ onClick }) {
  return (
    <FloatingButton type="button" onClick={onClick}>
      사전 예약하기
    </FloatingButton>
  );
}

export const InlineReserveButton = forwardRef(({ onClick }, ref) => {
  return (
    <InlineButton ref={ref} type="button" onClick={onClick}>
      사전 예약하기
    </InlineButton>
  );
});

const flowing = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  border-radius: 12px;

  /* 🔥 여기만 변경: 움직이는 그라데이션 */
  background: linear-gradient(
    90deg,
    #ffaab0,
    #ffc379,
    #ff9f63,
    #ffc379,
    #ffaab0
  );
  background-size: 300% 300%;
  animation: ${flowing} 4s ease infinite;

  box-shadow: 0 0 13.6px 0 #ffd8b1;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;
`;

const FloatingButton = styled(ButtonBase)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 88px;
  max-width: 380px;
  width: 290px;
  height: 54px;
  z-index: 30;
`;

const InlineButton = styled(ButtonBase)`
  width: 290px;
  height: 50px;
`;

InlineReserveButton.displayName = "InlineReserveButton";

export default FloatingReserveButton;
