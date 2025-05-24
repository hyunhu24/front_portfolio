//1번

import React, { useRef } from 'react';
import './styles/App.css';
import Main from './pages/Main';
import Intro from './pages/Intro';

const App: React.FC = () => {
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const isScrolling = useRef(false);
  let touchStartY = useRef(0);

  // 휠/터치 이벤트로 부드럽게 한 섹션씩 이동
  const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    const scrollTop = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;
    let idx = Math.round(scrollTop / vh);
    let nextIdx = direction === 'down' ? Math.min(idx + 1, sectionRefs.length - 1) : Math.max(idx - 1, 0);
    sectionRefs[nextIdx].current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling.current = false; }, 700);
  };

  // 휠 이벤트 핸들러
  const onWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) handleScroll('down');
    else if (e.deltaY < 0) handleScroll('up');
  };

  // 터치 이벤트 핸들러
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY.current - touchEndY > 50) handleScroll('down');
    else if (touchEndY - touchStartY.current > 50) handleScroll('up');
  };

  return (
    <div
      className="w-full h-screen overflow-hidden"
      tabIndex={-1}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ scrollSnapType: 'y mandatory', outline: 'none' }}
    >
      <div
        ref={sectionRefs[0]}
        style={{ height: '100vh', scrollSnapAlign: 'start' }}
        tabIndex={0}
      >
        <Main />
      </div>
      <div
        ref={sectionRefs[1]}
        style={{ height: '100vh', scrollSnapAlign: 'start' }}
        tabIndex={0}
      >
        <Intro />
      </div>
    </div>
  );
};

export default App; 

//2번

// import React from 'react';
// import Main from './pages/Main';
// import Intro from './pages/Intro';
// import './styles/App.css';

// const App: React.FC = () => {
//   return (
//     <div className="w-full min-h-screen">
//       <Main />
//       <Intro />
//     </div>
//   );
// };

// export default App; 
