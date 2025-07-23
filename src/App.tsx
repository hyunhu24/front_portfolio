import React from 'react';
import './styles/App.css';
import Main from './pages/Main';
import Intro from './pages/Intro';
import About from 'pages/About';
import ProjectMain from 'pages/project/ProjectMain';
import ProjectSub from 'pages/project/ProjectSub';
import ProjectSkill from 'pages/project/ProjectSkill';
import ProjectTroubleShooting from 'pages/project/ProjectTroubleShooting';
import ProjectIntroduction from 'pages/project/ProjectIntroduction';
import End from 'pages/End';
import { cookkingList, damoList, miruList } from 'data/projectMainList';

const App: React.FC = () => {

  return (
      <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
         {/* <div className="snap-start h-screen">
           <Main />
         </div>
         <div className="snap-start h-screen">
           <Intro />
         </div>
         <div className="snap-start h-screen">
           <About />
         </div> */}
         <div className="snap-start h-screen">
           <ProjectMain 
            mainId="project-main"
            navigateId="project-sub"
            pointColor="#F6C33B"
            textColor="#F1605A"
            num={1}
            projectName="MIRU"
            projectImage="miru"
            projectPaddingTop={60}
            projectMainList={miruList}
           />
         </div>
         <div className="snap-start h-screen">
           <ProjectSub />
         </div>
         <div className="snap-start h-screen">
           <ProjectSkill />
         </div>
         <div className="snap-start h-screen">
           <ProjectTroubleShooting />
         </div>
         <div className="snap-start h-screen">
           <ProjectIntroduction title="개발 주요 내용1" searchTitle="프로젝트 보기" page={1} />
         </div>
         <div className="snap-start h-screen">
           <ProjectIntroduction title="개발 주요 내용2" searchTitle="프로젝트 보기" page={2} />
         </div>
         <div className="snap-start h-screen">
           <ProjectIntroduction title="개발 주요 내용3" searchTitle="프로젝트 보기" page={3} />
         </div>
         <div className="snap-start h-screen">
           <ProjectIntroduction title="개발 주요 내용4" searchTitle="프로젝트 보기" page={4} />
         </div>
         <div className="snap-start h-screen">
           <ProjectIntroduction title="개발 주요 내용5" searchTitle="프로젝트 보기" page={5} />
         </div>
         <div className="snap-start h-screen">
           <ProjectMain 
            mainId="project-main"
            navigateId="project-sub"
            pointColor="#52A668"
            textColor="#F6C33B"
            num={2}
            projectName="CooKKing"
            projectImage="cookking"
            projectPaddingTop={0}
            projectMainList={cookkingList}
           />
         </div>
         <div className="snap-start h-screen">
           <ProjectMain 
            mainId="project-main"
            navigateId="project-sub"
            pointColor="#6194E7"
            textColor="#F1605A"
            num={3}
            projectName="Damo"
            projectImage="damo"
            projectPaddingTop={60}
            projectMainList={damoList}
           />
         </div>
         <div className="snap-start h-screen">
           <End />
         </div>
      </div>
  );
};

export default App;


//1번

// import React, { useRef } from 'react';
// import './styles/App.css';
// import Main from './pages/Main';
// import Intro from './pages/Intro';
// 

// const App: React.FC = () => {
//   const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
//   const isScrolling = useRef(false);
//   let touchStartY = useRef(0);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 휠/터치 이벤트로 부드럽게 한 섹션씩 이동
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

//   // 휠 이벤트 핸들러
//   const onWheel = (e: React.WheelEvent) => {
//     if (e.deltaY > 0 && location.pathname === '/') navigate('/intro');
//     else if (e.deltaY < 0 && location.pathname === '/intro') navigate('/');
//   };

//   // 터치 이벤트 핸들러
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartY.current = e.touches[0].clientY;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     if (touchStartY.current - touchEndY > 50) handleScroll('down');
//     else if (touchEndY - touchStartY.current > 50) handleScroll('up');
//   };

//   return (
//     <BrowserRouter>
//       <div
//         className="w-full h-screen overflow-hidden"
//         tabIndex={-1}
//         onWheel={onWheel}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//         style={{ scrollSnapType: 'y mandatory', outline: 'none' }}
//       >
//         <Routes>
//           <Route path="/" element={
//             <div
//               ref={sectionRefs[0]}
//               style={{ height: '100vh', scrollSnapAlign: 'start' }}
//               tabIndex={0}
//             >
//               <Main />
//             </div>
//           } />
//           <Route path="/intro" element={
//             <div
//               ref={sectionRefs[1]}
//               style={{ height: '100vh', scrollSnapAlign: 'start' }}
//               tabIndex={0}
//             >
//               <Intro />
//             </div>
//           } />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App; 

//2번

// import React, { useRef } from 'react';
// import Main from './pages/Main';
// import Intro from './pages/Intro';
// import { Routes, Route } from 'react-router-dom';
// import ScrollRouter from './ScrollRouter';
// import About from 'pages/About';
// import ProjectMain from 'pages/project1/ProjectMain';
// import ProjectSub from 'pages/project1/ProjectSub';

// const App: React.FC = () => {
//   const mainRef = useRef<HTMLDivElement>(null);
//   const introRef = useRef<HTMLDivElement>(null);
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const project1Ref = useRef<HTMLDivElement>(null);
//   const project1SubRef = useRef<HTMLDivElement>(null);

//   return (
//       <div className="w-full min-h-screen">
//         <ScrollRouter>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div
//                   ref={mainRef}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                   tabIndex={0}
//                   onTouchStart={() => {
//                     console.log('touch start');
//                   }}
//                 >
//                   <Main />
//                 </div>
//               }
//             />
//             <Route
//               path="/intro"
//               element={
//                 <div
//                   ref={introRef}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                   tabIndex={0}
//                 >
//                   <Intro />
//                 </div>
//               }
//             />
//             <Route
//               path="/about"
//               element={
//                 <div
//                   ref={aboutRef}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                   tabIndex={0}
//                 >
//                   <About />
//                 </div>
//               }
//             />
//             <Route
//               path="/project1Main"
//               element={
//                 <div
//                   ref={project1Ref}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                   tabIndex={0}
//                 >
//                   <ProjectMain />
//                 </div>
//               }
//             />
//             <Route
//               path="/project1Sub"
//               element={
//                 <div
//                   ref={project1SubRef}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                   tabIndex={0}
//                 >
//                   <ProjectSub />
//                 </div>
//               }
//             />
            

//           </Routes>
//         </ScrollRouter>
//       </div>
//   );
// };

// export default App;

//3번

// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Main from './pages/Main';
// import Intro from './pages/Intro';
// import ScrollRouter from './ScrollRouter';

// const App: React.FC = () => {
//   const location = useLocation();

//   return (
//     <div className="w-full min-h-screen">
//       <ScrollRouter>
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route
//               path="/"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.1 }}
//                   style={{ height: '100vh', scrollSnapAlign: 'start' }}
//                 >
//                   <Main />
//                 </motion.div>
//               }
//             />
//             <Route
//               path="/intro"
//               element={
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -50 }}
//                   transition={{ duration: 0.5 }}
//                   style={{ height: '100vh', scrollSnapAlign: 'end' }}
//                 >
//                   <Intro />
//                 </motion.div>
//               }
//             />
//           </Routes>
//         </AnimatePresence>
//       </ScrollRouter>
//     </div>
//   );
// };

// export default App;
