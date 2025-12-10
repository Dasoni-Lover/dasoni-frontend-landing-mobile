import React, { forwardRef, useEffect, useState, useRef } from "react";
import {
  CardScrollWrapper,
  SectionContainer,
  SectionIconWrapper,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "./SectionBase";
import styled from "styled-components";
import ImgYellowHouse from "../../assets/img-yellow-house.png";

import ImgPost1 from "../../assets/img-post-1.svg";
import ImgPost2 from "../../assets/img-post-2.svg";
import ImgPost3 from "../../assets/img-post-3.svg";

import ImgAIRequest from "../../assets/img-ai-request.svg";
import ImgAIResponse from "../../assets/img-ai-response.svg";

import ImgMockUp from "../../assets/img-mockup.png";

const MemorialSection = forwardRef((_, ref) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isAIVisible, setIsAIVisible] = useState(false);
  const [isLinkVisible, setIsLinkVisible] = useState(false);

  const aiRef = useRef(null);
  const linkRef = useRef(null);

  // 🔹 섹션별 이미지 로딩 상태
  const [isSectionImgReady, setIsSectionImgReady] = useState(false); // 상단 + 카드 목록
  const [isAIImgReady, setIsAIImgReady] = useState(false); // AI 요청/응답 이미지
  const [isLinkImgReady, setIsLinkImgReady] = useState(false); // 링크 공유 mockup

  const sectionImgCountRef = useRef(0);
  const aiImgCountRef = useRef(0);
  const linkImgCountRef = useRef(0);

  // 상단(노란집 + 3장 카드) 이미지 로딩 핸들러
  const handleSectionImgLoad = () => {
    sectionImgCountRef.current += 1;
    if (sectionImgCountRef.current >= 4 && !isSectionImgReady) {
      setTimeout(() => setIsSectionImgReady(true), 100);
    }
  };

  // AI 섹션 이미지 로딩 핸들러 (요청/응답 2개)
  const handleAIImgLoad = () => {
    aiImgCountRef.current += 1;
    if (aiImgCountRef.current >= 2 && !isAIImgReady) {
      setTimeout(() => setIsAIImgReady(true), 100);
    }
  };

  // 링크 모크업 이미지 로딩 핸들러
  const handleLinkImgLoad = () => {
    linkImgCountRef.current += 1;
    if (linkImgCountRef.current >= 1 && !isLinkImgReady) {
      setTimeout(() => setIsLinkImgReady(true), 100);
    }
  };

  // ✅ 실제로 애니메이션을 시작할 조건들
  const sectionReady = isSectionVisible && isSectionImgReady;
  const aiReady = isAIVisible && isAIImgReady;
  const linkReady = isLinkVisible && isLinkImgReady;

  // 전체 MemorialSection 진입 시 (상단 영역용)
  useEffect(() => {
    if (!ref || !("current" in ref)) return;
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
            observer.unobserve(entry.target); // 한 번만
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [ref]);

  // AISection 진입 시
  useEffect(() => {
    const target = aiRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAIVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  // LinkShareSection 진입 시
  useEffect(() => {
    const target = linkRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLinkVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContainer
      ref={ref}
      data-tab-id="memorial"
      $bgGradient="linear-gradient(180deg, #FFEED9 27.4%, #FFC882 39.42%, #FFFDFA 53.37%)"
    >
      {/* 섹션 진입 + 이미지 로딩 완료 후 등장하는 상단 영역들 */}
      <FadeInItem $visible={sectionReady} $delay="0s">
        <SectionIconWrapper>
          <img
            src={ImgYellowHouse}
            style={{ marginTop: "50px", width: "71px" }}
            onLoad={handleSectionImgLoad}
          />
          <SectionLabel>추모관</SectionLabel>
        </SectionIconWrapper>
      </FadeInItem>

      <FadeInItem $visible={sectionReady} $delay="0.1s">
        <SectionTitle>
          고인과의 추억이 담긴 사진을 <br /> 앨범에 올려주세요
        </SectionTitle>
      </FadeInItem>

      <FadeInItem $visible={sectionReady} $delay="0.2s">
        <SectionSubtitle style={{ marginBottom: "43px" }}>
          추모관에 방문한 추모객들과 추억을 나눌 수 있어요
        </SectionSubtitle>
      </FadeInItem>

      <FadeInItem $visible={sectionReady} $delay="0.3s">
        <CardScrollWrapper>
          <PostImg src={ImgPost1} onLoad={handleSectionImgLoad} />
          <PostImg src={ImgPost2} onLoad={handleSectionImgLoad} />
          <PostImg src={ImgPost3} onLoad={handleSectionImgLoad} />
        </CardScrollWrapper>
      </FadeInItem>

      {/* AISection: 이 영역에 실제로 도달 + AI 이미지 로딩 완료 시 내부 컴포넌트 순차 애니메이션 */}
      <FadeInWrapper ref={aiRef}>
        <FadeInItem $visible={aiReady} $delay="0s">
          <SectionTitle>
            함께한 순간의 사진이 남아있지 않아 아쉬우신가요?
          </SectionTitle>
        </FadeInItem>

        <FadeInItem $visible={aiReady} $delay="0.1s">
          <SectionSubtitle style={{ marginBottom: "18px" }}>
            혹은 함께하지 못해 상상만 했던 순간이 있나요? <br />
            기억 속의 장면을 AI로 직접 만들어 보세요.
          </SectionSubtitle>
        </FadeInItem>
        <YellowBg>
          {/* 오른쪽 정렬 (요청 버블 쪽) */}
          <FadeInItem
            $visible={aiReady}
            $delay="0.2s"
            $fullWidth
            $align="right"
          >
            <RequestImg src={ImgAIRequest} onLoad={handleAIImgLoad} />
          </FadeInItem>

          <FadeInItem
            $visible={aiReady}
            $delay="0.3s"
            $fullWidth
            $align="right"
          >
            <ReqeustChat>
              우리 엄마가 내 첫 아이 유빈이 한번 안고 있는 모습 보고싶다
            </ReqeustChat>
          </FadeInItem>

          {/* 왼쪽 정렬 (응답 버블 쪽) */}
          <FadeInItem $visible={aiReady} $delay="0.4s" $fullWidth $align="left">
            <ResponseImg src={ImgAIResponse} onLoad={handleAIImgLoad} />
          </FadeInItem>

          <FadeInItem $visible={aiReady} $delay="0.5s" $fullWidth $align="left">
            <ResponseChat>요청하신 이미지를 생성했어요</ResponseChat>
          </FadeInItem>
        </YellowBg>
      </FadeInWrapper>

      {/* LinkShareSection: 이 영역에 도달 + mockup 이미지 로딩 완료 시 내부 컴포넌트 순차 애니메이션 */}
      <FadeInWrapper ref={linkRef}>
        <FadeInItem $visible={linkReady} $delay="0s">
          <LinkShareSection>
            <SectionTitle>추모관 링크를 공유해 주세요</SectionTitle>
          </LinkShareSection>
        </FadeInItem>

        <FadeInItem $visible={linkReady} $delay="0.1s">
          <SectionSubtitle
            style={{ marginBottom: "18px", textAlign: "center" }}
          >
            고인을 사랑했던 이들과 함께 추억을 모아 보세요
            <br />
            기억을 나누는 순간들이 서로에게 따뜻한 위로가 되어줄 거예요
          </SectionSubtitle>
        </FadeInItem>

        <FadeInItem $visible={linkReady} $delay="0.2s">
          <img
            src={ImgMockUp}
            style={{ width: "100%", display: "block" }}
            onLoad={handleLinkImgLoad}
          />
        </FadeInItem>
      </FadeInWrapper>
    </SectionContainer>
  );
});

// 상단/공통 페이드인
const FadeInItem = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
  transition: opacity 0.6s ease-out ${({ $delay }) => $delay || "0s"},
    transform 0.6s ease-out ${({ $delay }) => $delay || "0s"};

  /* ✅ 아래부터 추가: 필요할 때만 flex 컨테이너로 써서 정렬 제어 */
  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
    display: flex;
  `}

  ${({ $fullWidth, $align }) =>
    $fullWidth &&
    `
    justify-content: ${
      $align === "right"
        ? "flex-end"
        : $align === "left"
        ? "flex-start"
        : "center"
    };
  `}
`;

// 개별 섹션 래퍼 (애니메이션 X, ref 용도)
const FadeInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostImg = styled.img``;

const YellowBg = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  border-radius: 6px;
  background: #ffebd1;
  flex-direction: column;
  padding: 20px 25px;
`;

const RequestImg = styled.img`
  margin-bottom: 10px;
`;

const ResponseImg = styled.img`
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
