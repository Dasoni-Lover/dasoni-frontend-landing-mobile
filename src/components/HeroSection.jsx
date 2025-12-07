import React, { forwardRef } from "react";
import styled from "styled-components";

const HeroSection = forwardRef((props, ref) => {
  return (
    <HeroContainer ref={ref} data-tab-id="hero">
      <HeroIllustration>
        <Rainbow>🌈</Rainbow>
        <HeroHouse>🏡</HeroHouse>
      </HeroIllustration>
      <HeroTitle>
        사랑하는 사람을 위한
        <br />
        작은 온라인 추모관
      </HeroTitle>
      <HeroDescription>
        사진과 편지, 목소리까지 모아
        <br />
        언제든 꺼내볼 수 있는 공간을 준비했어요.
      </HeroDescription>
    </HeroContainer>
  );
});

const HeroContainer = styled.section`
  padding: 1.5rem 1.5rem 1.75rem;
  text-align: center;
`;

const HeroIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const Rainbow = styled.div`
  font-size: 2.1rem;
`;

const HeroHouse = styled.div`
  font-size: 2.2rem;
`;

const HeroTitle = styled.h1`
  font-size: 1.35rem;
  line-height: 1.4;
  font-weight: 700;
  color: #4b3a30;
  margin-bottom: 0.6rem;
`;

const HeroDescription = styled.p`
  font-size: 0.88rem;
  color: #9f8b78;
`;

HeroSection.displayName = "HeroSection";

export default HeroSection;
