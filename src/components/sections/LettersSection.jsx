import React, { forwardRef } from "react";
import {
  SectionContainer,
  SectionIconWrapper,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "./SectionBase";
import styled from "styled-components";

const LettersSection = forwardRef((_, ref) => {
  return (
    <SectionContainer
      ref={ref}
      data-tab-id="letters"
      $bgGradient="linear-gradient(180deg, #ffe5df 0%, #ffeaf3 100%)"
    >
      <SectionIconWrapper>
        <SectionIconLetter>💌</SectionIconLetter>
        <SectionLabel>편지함</SectionLabel>
      </SectionIconWrapper>
      <SectionTitle>말하지 못했던 마음을 편지로 남겨보세요</SectionTitle>
      <SectionSubtitle>
        힘들었던 날, 고마웠던 순간들을
        <br />
        조용히 꺼내어 적어둘 수 있어요.
      </SectionSubtitle>

      <LetterPreviewWrapper>
        <LetterPaper>
          <LetterHeader>To. 사랑하는 아버지께</LetterHeader>
          <LetterBody>
            오늘도 아버지가 좋아하시던 길을 따라 걸었습니다. 함께 보았던 벚꽃은
            벌써 지고 없지만, 그날의 따뜻한 손길과 웃음은 그대로 남아 있는 것
            같아요. 바쁘다는 이유로 미뤄두었던 말들, 이제라도 천천히 적어
            내려가 보려 합니다...
          </LetterBody>
          <LetterFooter>– 막내딸 수진이</LetterFooter>
        </LetterPaper>
      </LetterPreviewWrapper>
    </SectionContainer>
  );
});

const SectionIconLetter = styled.div`
  font-size: 2rem;
`;

const LetterPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LetterPaper = styled.div`
  width: 100%;
  max-width: 320px;
  background: #fffdf7;
  border-radius: 18px;
  padding: 1.1rem 1.1rem 1.2rem;
  box-shadow: 0 10px 22px rgba(196, 151, 132, 0.25);
`;

const LetterHeader = styled.div`
  font-size: 0.86rem;
  font-weight: 600;
  color: #4b3a30;
  margin-bottom: 0.65rem;
`;

const LetterBody = styled.p`
  font-size: 0.76rem;
  color: #705c4c;
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const LetterFooter = styled.div`
  font-size: 0.72rem;
  color: #b19b86;
  text-align: right;
`;

LettersSection.displayName = "LettersSection";

export default LettersSection;
