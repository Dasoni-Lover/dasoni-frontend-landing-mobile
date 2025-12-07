import React, { forwardRef } from "react";
import {
  SectionContainer,
  SectionIconWrapper,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from "./SectionBase";
import styled from "styled-components";

const ReserveSection = forwardRef((_, ref) => {
  return (
    <SectionContainer
      ref={ref}
      data-tab-id="reserve"
      $bgGradient="linear-gradient(180deg, #ffe9ce 0%, #ffeaf3 100%)"
    >
      <SectionIconWrapper>
        <SectionIconReserve>📅</SectionIconReserve>
        <SectionLabel>사전 예약</SectionLabel>
      </SectionIconWrapper>
      <SectionTitle>다소니 추모관, 가장 먼저 만나보고 싶으신가요?</SectionTitle>
      <SectionSubtitle>
        정식 오픈 전에 알림을 신청하시면
        <br />
        사전 이용 안내와 초대장을 보내드릴게요.
      </SectionSubtitle>

      <ReserveForm>
        <FormRow>
          <FormLabel>이름</FormLabel>
          <FormInput placeholder="이름을 입력해주세요" />
        </FormRow>
        <FormRow>
          <FormLabel>이메일</FormLabel>
          <FormInput placeholder="알림을 받으실 이메일" />
        </FormRow>
        <FormRow>
          <FormLabel>예상 이용 시기</FormLabel>
          <SelectRow>
            <FormSelect>
              <option>2026년</option>
              <option>2025년</option>
              <option>2024년</option>
            </FormSelect>
            <FormSelect>
              <option>상반기</option>
              <option>하반기</option>
            </FormSelect>
          </SelectRow>
        </FormRow>
        <ReserveButton type="button">사전 예약 신청하기</ReserveButton>
        <ReserveNotice>
          정확한 오픈 일정과 서비스 소식은
          <br />
          사전 예약을 신청해주신 분들께 가장 먼저 알려드릴게요.
        </ReserveNotice>
      </ReserveForm>
    </SectionContainer>
  );
});

const SectionIconReserve = styled.div`
  font-size: 2rem;
`;

const ReserveForm = styled.div`
  margin-top: 0.3rem;
  background: #ffffff;
  border-radius: 18px;
  padding: 1.1rem 1rem 1.3rem;
  box-shadow: 0 12px 24px rgba(216, 148, 118, 0.3);
`;

const FormRow = styled.div`
  margin-bottom: 0.85rem;
`;

const FormLabel = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: #705c4c;
  margin-bottom: 0.3rem;
`;

const FormInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ffe0c2;
  padding: 0.55rem 0.7rem;
  font-size: 0.78rem;
  outline: none;
  background: #fffaf4;

  &::placeholder {
    color: #c1ab96;
  }
`;

const SelectRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FormSelect = styled.select`
  flex: 1;
  border-radius: 10px;
  border: 1px solid #ffe0c2;
  padding: 0.5rem 0.7rem;
  font-size: 0.78rem;
  outline: none;
  background: #fffaf4;
`;

const ReserveButton = styled.button`
  margin-top: 0.2rem;
  width: 100%;
  border-radius: 999px;
  border: none;
  padding: 0.7rem 1rem;
  font-size: 0.86rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(90deg, #ffb86c, #ff7a7a);
  box-shadow: 0 6px 18px rgba(255, 138, 61, 0.45);
`;

const ReserveNotice = styled.p`
  margin-top: 0.7rem;
  font-size: 0.75rem;
  color: #b19b86;
  text-align: center;
  line-height: 1.5;
`;

ReserveSection.displayName = "ReserveSection";

export default ReserveSection;
