import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>다소니</FooterLogo>
      <FooterText>사랑하는 마음이 머무는 작은 공간</FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 1.75rem 1.25rem 2.5rem;
  text-align: center;
  background: #fff7f0;
`;

const FooterLogo = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  color: #ff8a3d;
  margin-bottom: 0.3rem;
`;

const FooterText = styled.div`
  font-size: 0.75rem;
  color: #b19b86;
`;

export default Footer;
