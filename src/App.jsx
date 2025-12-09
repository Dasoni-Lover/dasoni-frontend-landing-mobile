import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import FloatingReserveButton from "./components/FloatingReserveButton";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import LettersSection from "./components/sections/LettersSection";
import MemorialSection from "./components/sections/MemorialSection";
import MyHallSection from "./components/sections/MyHallSection";
import ReserveSection from "./components/sections/ReserveSection";

// 🎵 BGM 파일 import (Vite에서 자동으로 URL로 번들됨)
import bgmSrc from "./assets/dasoni-bgm.mp3";

export default function App() {
  const [activeTab, setActiveTab] = useState("memorial");
  const [hideFloating, setHideFloating] = useState(false);
  const [isInlineVisible, setIsInlineVisible] = useState(true);

  const inlineReserveRef = useRef(null);
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

  // 🎵 BGM용 audio ref
  const bgmRef = useRef(null);

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
    const handleScroll = () => {
      const headerOffset = 72;
      const scrollPosition = window.scrollY + headerOffset + 1;
      const order = ["memorial", "letters", "myHall", "reserve"];

      let nextActive = order[0];
      order.forEach((key) => {
        const ref = sectionRefs[key];
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          nextActive = key;
        }
      });

      setActiveTab((prev) => (prev !== nextActive ? nextActive : prev));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reserveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (reserveRef.current && entry.target === reserveRef.current) {
            setHideFloating(entry.isIntersecting);
          }
        });
      },
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );

    const inlineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            inlineReserveRef.current &&
            entry.target === inlineReserveRef.current
          ) {
            setIsInlineVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0 }
    );

    if (reserveRef.current) reserveObserver.observe(reserveRef.current);
    if (inlineReserveRef.current)
      inlineObserver.observe(inlineReserveRef.current);

    return () => {
      reserveObserver.disconnect();
      inlineObserver.disconnect();
    };
  }, []);

  // 🎵 첫 사용자 인터랙션(클릭/터치) 이후에만 BGM 재생
  useEffect(() => {
    const audio = bgmRef.current;
    if (!audio) return;

    const handleFirstInteraction = () => {
      // 시작 설정
      audio.currentTime = 0;
      audio.volume = 0;

      const playPromise = audio.play();

      if (playPromise) {
        playPromise
          .then(() => {
            // ✅ 재생 성공 → 볼륨 페이드인
            let v = 0;
            const target = 0.6; // 최종 볼륨
            const step = 0.05;

            const interval = setInterval(() => {
              v += step;
              if (v >= target) {
                v = target;
                clearInterval(interval);
              }
              audio.volume = v;
            }, 80);
          })
          .catch((err) => {
            console.warn("BGM play failed:", err);
          });
      }

      // 한 번만 실행되도록 리스너 제거
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    // 아무데나 클릭/터치하면 BGM 시작
    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <>
      <GlobalStyle />

      {/* 🎵 BGM 오디오 요소 - 화면에는 보이지 않음 */}
      <audio ref={bgmRef} src={bgmSrc} loop playsInline />

      <PageWrapper>
        <Header
          inlineRef={inlineReserveRef}
          onReserveClick={() => handleTabClick("reserve")}
        />
        <TabBar activeTab={activeTab} onTabClick={handleTabClick} />

        <MemorialSection ref={memorialRef} />
        <LettersSection ref={lettersRef} />
        <MyHallSection ref={myHallRef} />
        <ReserveSection ref={reserveRef} />

        <Footer />

        <FloatingReserveButton
          visible={!isInlineVisible && !hideFloating}
          onClick={() => handleTabClick("reserve")}
        />
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  max-width: 430px;
  margin: 0 auto;
  background: #fff7f0;
`;
