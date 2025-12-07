import React, { forwardRef } from "react";
import {
  Avatar,
  CardBody,
  CardDate,
  CardHeader,
  CardImage,
  CardName,
  CardScrollWrapper,
  CardText,
  PhotoCard,
  SectionContainer,
  SectionIconWrapper,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "./SectionBase";
import styled from "styled-components";

const MemorialSection = forwardRef((_, ref) => {
  return (
    <SectionContainer
      ref={ref}
      data-tab-id="memorial"
      $bgGradient="linear-gradient(180deg, #ffe9ce 0%, #ffe0d8 100%)"
    >
      <SectionIconWrapper>
        <SectionIconHouse>🏠</SectionIconHouse>
        <SectionLabel>추모관</SectionLabel>
      </SectionIconWrapper>
      <SectionTitle>고인과 함께한 사진을 담아둘 수 있어요</SectionTitle>
      <SectionSubtitle>
        가족, 지인과 함께 추모관을 방문하고
        <br />
        사진과 추억을 나눌 수 있어요.
      </SectionSubtitle>

      <CardScrollWrapper>
        <PhotoCard>
          <CardHeader>
            <Avatar />
            <CardName>박철형</CardName>
          </CardHeader>
          <CardImage />
          <CardBody>
            <CardDate>2008년 겨울</CardDate>
            <CardText>
              솜사탕 하나를 사주니 세상을 다 가진 듯 웃던 네 얼굴. 작은 손으로
              솜사탕을 쥐고 아빠를 보며 웃던 모습이 아직도 눈에 선하구나.
            </CardText>
          </CardBody>
        </PhotoCard>

        <PhotoCard $dimmed>
          <CardHeader>
            <Avatar />
            <CardName>이수정</CardName>
          </CardHeader>
          <CardImage $blue />
          <CardBody>
            <CardDate>2015년 여름</CardDate>
            <CardText>
              우리 가족의 바다가 된 날. 파도소리에 묻힌 웃음소리가 아직도
              귓가에 머물러 있어요.
            </CardText>
          </CardBody>
        </PhotoCard>
      </CardScrollWrapper>
    </SectionContainer>
  );
});

const SectionIconHouse = styled.div`
  font-size: 2rem;
`;

MemorialSection.displayName = "MemorialSection";

export default MemorialSection;
