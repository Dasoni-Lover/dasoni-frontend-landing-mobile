import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1.75rem 1.25rem 2.25rem;
  background: ${({ $bgGradient }) => $bgGradient || "#fff7f0"};
`;

export const SectionIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const SectionLabel = styled.div`
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: #ff8a3d;
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #4b3a30;
  text-align: center;
  margin-bottom: 0.4rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.86rem;
  color: #9f8b78;
  text-align: center;
  margin-bottom: 1.3rem;
  line-height: 1.5;
`;

export const CardScrollWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PhotoCard = styled.article`
  min-width: 230px;
  max-width: 230px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 20px rgba(203, 146, 102, 0.26);
  overflow: hidden;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.5 : 1)};
`;

export const MyHallCard = styled(PhotoCard)`
  min-width: 260px;
  max-width: 260px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 0.8rem 0.5rem;
  gap: 0.45rem;
`;

export const Avatar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: #ffe0b2;
`;

export const CardName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #4b3a30;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background: ${({ $blue, $spring }) =>
    $spring
      ? "linear-gradient(135deg, #ffe0f0, #e8ffda)"
      : $blue
      ? "linear-gradient(135deg, #c1e3ff, #a2b7ff)"
      : "linear-gradient(135deg, #ffe6a7, #ffb6c1)"};
`;

export const CardBody = styled.div`
  padding: 0.8rem 0.9rem 0.9rem;
`;

export const CardDate = styled.div`
  font-size: 0.72rem;
  color: #b19b86;
  margin-bottom: 0.35rem;
`;

export const CardText = styled.p`
  font-size: 0.8rem;
  color: #4b3a30;
  line-height: 1.45;
`;
