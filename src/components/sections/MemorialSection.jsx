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
import ImgYellowHouse from "../../assets/img-yellow-house.svg";

import ImgPost1 from "../../assets/img-post-1.svg";
import ImgPost2 from "../../assets/img-post-2.svg";
import ImgPost3 from "../../assets/img-post-3.svg";

import ImgAIRequest from "../../assets/img-ai-request.svg";
import ImgAIResponse from "../../assets/img-ai-response.svg";

import ImgMockUp from "../../assets/img-mockup.svg";

const MemorialSection = forwardRef((_, ref) => {
  return (
    <SectionContainer
      ref={ref}
      data-tab-id="memorial"
      $bgGradient="linear-gradient(180deg, #FFEED9 27.4%, #FFC882 39.42%, #FFFDFA 53.37%)"
    >
      <SectionIconWrapper>
        <img src={ImgYellowHouse} style={{ marginTop: "50px" }} />
        <SectionLabel>추모관</SectionLabel>
      </SectionIconWrapper>
      <SectionTitle>
        고인과의 추억이 담긴 사진을 <br /> 앨범에 올려주세요
      </SectionTitle>
      <SectionSubtitle style={{ marginBottom: "43px" }}>
        추모관에 방문한 추모객들과 추억을 나눌 수 있어요
      </SectionSubtitle>

      <CardScrollWrapper>
        <PostImg src={ImgPost1} />
        <PostImg src={ImgPost2} />
        <PostImg src={ImgPost3} />
      </CardScrollWrapper>

      <SectionTitle>
        함께한 순간의 사진이 남아있지 않아 아쉬우신가요?
      </SectionTitle>
      <SectionSubtitle style={{ marginBottom: "18px" }}>
        혹은 함께하지 못해 상상만 했던 순간이 있나요? <br />
        기억 속의 장면을 AI로 직접 만들어 보세요.
      </SectionSubtitle>
      <AISection>
        <RequestImg src={ImgAIRequest} />
        <ReqeustChat>
          우리 엄마가 내 첫 아이 유빈이 한번 안고 있는 모습 보고싶다
        </ReqeustChat>
        <ResponseImg src={ImgAIResponse} />
        <ResponseChat>요청하신 이미지를 생성했어요</ResponseChat>
      </AISection>
      <LinkShareSection>
        <SectionTitle>추모관 링크를 공유해 주세요</SectionTitle>
        <SectionSubtitle style={{ marginBottom: "18px" }}>
          고인을 사랑했던 이들과 함께 추억을 모아 보세요
          <br />
          기억을 나누는 순간들이 서로에게 따뜻한 위로가 되어줄 거예요
        </SectionSubtitle>
        <img src={ImgMockUp} />
      </LinkShareSection>
    </SectionContainer>
  );
});

const PostImg = styled.img``;

const AISection = styled.div`
  display: inline-flex;
  width: 100%;

  align-items: center;
  border-radius: 6px;
  background: #ffebd1;
  flex-direction: column;
  padding: 20px 25px;
`;

const RequestImg = styled.img`
  align-self: flex-end;
  margin-bottom: 10px;
`;
const ResponseImg = styled.img`
  align-self: flex-start;
  margin-bottom: 10px;
`;

const ReqeustChat = styled.div`
  width: 333px;
  height: 33px;
  border-radius: 15px;
  border: 0.7px solid #f4f4f4;
  background: #fff;
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 30px;
`;

const ResponseChat = styled.div`
  width: 190px;
  height: 33px;
  border-radius: 15px;
  border: 1px solid #ffbf6b;
  background: #ffce8e;
  color: #505050;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;

const LinkShareSection = styled.div`
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

MemorialSection.displayName = "MemorialSection";

export default MemorialSection;
