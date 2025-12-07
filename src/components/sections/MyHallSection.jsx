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
  MyHallCard,
  SectionContainer,
  SectionIconWrapper,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "./SectionBase";
import styled from "styled-components";

const MyHallSection = forwardRef((_, ref) => {
  return (
    <SectionContainer
      ref={ref}
      data-tab-id="myHall"
      $bgGradient="linear-gradient(180deg, #ffeaf3 0%, #f9e6ff 100%)"
    >
      <SectionIconWrapper>
        <SectionIconMyHall>🏡</SectionIconMyHall>
        <SectionLabel>나의 추모관</SectionLabel>
      </SectionIconWrapper>
      <SectionTitle>언제든 다시 찾을 수 있도록 모아둘게요</SectionTitle>
      <SectionSubtitle>
        추모관마다 사진과 편지, 음성을
        <br />한 번에 확인하고 관리할 수 있어요.
      </SectionSubtitle>

      <CardScrollWrapper>
        <MyHallCard>
          <CardHeader>
            <Avatar />
            <CardName>엄마와의 마지막 봄날</CardName>
          </CardHeader>
          <CardImage $spring />
          <CardBody>
            <CardDate>2019년 4월 12일</CardDate>
            <CardText>
              벚꽃이 흩날리던 날, 엄마가 내 손을 꼭 잡고 웃어주던 그 순간을 잊지
              않을게요.
            </CardText>
          </CardBody>
        </MyHallCard>
      </CardScrollWrapper>
    </SectionContainer>
  );
});

const SectionIconMyHall = styled.div`
  font-size: 2rem;
`;

MyHallSection.displayName = "MyHallSection";

export default MyHallSection;
