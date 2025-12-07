import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import FloatingReserveButton from "./components/FloatingReserveButton";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TabBar from "./components/TabBar";
import LettersSection from "./components/sections/LettersSection";
import MemorialSection from "./components/sections/MemorialSection";
import MyHallSection from "./components/sections/MyHallSection";
import ReserveSection from "./components/sections/ReserveSection";

export default function App() {
  const [activeTab, setActiveTab] = useState("memorial");
  const [hideFloating, setHideFloating] = useState(false);

  const memorialRef = useRef(null);
  const lettersRef = useRef(null);
  const myHallRef = useRef(null);
  const reserveRef = useRef(null);

  const sectionRefs = {
    memorial: memorialRef,
    letters: lettersRef,
    myHall: myHallRef,
    reserve: reserveRef,
  };

  const handleTabClick = (key) => {
    const targetRef = sectionRefs[key];
    if (!targetRef || !targetRef.current) return;

    const headerOffset = 72;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    window.scrollTo({
      top: rect.top + scrollTop - headerOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const options = {
      threshold: [0.25, 0.5, 0.75],
      rootMargin: "-72px 0px 0px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      let mostVisibleSection = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        const tabId = entry.target.getAttribute("data-tab-id");

        if (tabId === "reserve") {
          setHideFloating(entry.isIntersecting);
        }

        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = tabId;
        }
      });

      if (mostVisibleSection) {
        setActiveTab(mostVisibleSection);
      }
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <TabBar activeTab={activeTab} onTabClick={handleTabClick} />
        <HeroSection />

        <MemorialSection ref={memorialRef} />
        <LettersSection ref={lettersRef} />
        <MyHallSection ref={myHallRef} />
        <ReserveSection ref={reserveRef} />

        <Footer />

        {!hideFloating && (
          <FloatingReserveButton onClick={() => handleTabClick("reserve")} />
        )}
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  max-width: 430px;
  margin: 0 auto;
  background: #fff7f0;
  padding-bottom: 120px;
`;
