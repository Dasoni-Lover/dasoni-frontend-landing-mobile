import React from "react";
import styled from "styled-components";

function FloatingReserveButton({ onClick }) {
  return (
    <FloatingButton type="button" onClick={onClick}>
      사전 예약하기
    </FloatingButton>
  );
}

const FloatingButton = styled.button`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 88px;
  width: calc(100% - 3rem);
  max-width: 380px;
  height: 52px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(90deg, #ffb86c, #ff7a7a);
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(255, 141, 60, 0.5);
  z-index: 30;
`;

export default FloatingReserveButton;
