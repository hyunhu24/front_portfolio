// import { useNavigate, useLocation } from 'react-router-dom';
// import React, { useRef } from 'react';
// import './styles/App.css';
// import Main from './pages/Main';
// import Intro from './pages/Intro';

// const ScrollRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
//   const isScrolling = useRef(false);
//   let touchStartY = useRef(0);

//   const handleScroll = (direction: 'up' | 'down') => {
//     if (isScrolling.current) return;
//     isScrolling.current = true;
//     const scrollTop = window.scrollY || window.pageYOffset;
//     const vh = window.innerHeight;
//     let idx = Math.round(scrollTop / vh);
//     let nextIdx = direction === 'down' ? Math.min(idx + 1, sectionRefs.length - 1) : Math.max(idx - 1, 0);
//     sectionRefs[nextIdx].current?.scrollIntoView({ behavior: 'smooth' });
//     setTimeout(() => { isScrolling.current = false; }, 700);
//   };

//   const onWheel = (e: React.WheelEvent) => {
//     if (e.deltaY > 0 && location.pathname === '/') navigate('/intro');
//     else if (e.deltaY < 0 && location.pathname === '/intro') navigate('/');
//     else if (e.deltaY > 0 && location.pathname === '/intro') navigate('/about');
//     else if (e.deltaY < 0 && location.pathname === '/about') navigate('/intro');
//   };

//   // 터치 이벤트도 필요하다면 여기에 추가
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartY.current = e.touches[0].clientY;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     if (touchStartY.current - touchEndY > 50) handleScroll('down');
//     else if (touchEndY - touchStartY.current > 50) handleScroll('up');
//   };

//   return (
//     <div
//       className="w-full h-screen overflow-hidden"
//       tabIndex={-1}
//       onWheel={onWheel}
//       style={{ scrollSnapType: 'y mandatory', outline: 'none' }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollRouter;

import { useNavigate, useLocation } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import './styles/App.css';
import Main from './pages/Main';
import Intro from './pages/Intro';

const ScrollRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrolling = useRef(false);
  let touchStartY = useRef(0);

  const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (direction === 'down') {
      if (location.pathname === '/') navigate('/intro');
      else if (location.pathname === '/intro') navigate('/about');
    } else {
      if (location.pathname === '/intro') navigate('/');
      else if (location.pathname === '/about') navigate('/intro');
    }

    setTimeout(() => { isScrolling.current = false; }, 200);
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // 기본 스크롤 동작 방지
    if (e.deltaY > 0) handleScroll('down');
    else if (e.deltaY < 0) handleScroll('up');
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY.current - touchEndY > 50) handleScroll('down');
    else if (touchEndY - touchStartY.current > 50) handleScroll('up');
  };

  // 스크롤 이벤트 방지
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();
    document.addEventListener('wheel', preventDefault, { passive: false });
    return () => document.removeEventListener('wheel', preventDefault);
  }, []);

  return (
    <div
      className="w-full h-screen overflow-hidden"
      tabIndex={-1}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ scrollSnapType: 'y mandatory', outline: 'none' }}
    >
      {children}
    </div>
  );
};

export default ScrollRouter;