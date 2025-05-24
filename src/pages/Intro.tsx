import React from 'react';
import BubbleBox from '../components/BubbleBox';

const colorDots = [
  'bg-primaryblue',
  'bg-primarygreen',
  'bg-primaryyellow',
  'bg-primaryred',
  'bg-primaryyellow',
  'bg-primaryblue',
];

const paginationDots = [0, 1, 2, 3, 4, 5];

const Intro: React.FC = () => {
  return (
    <div className="w-full h-full min-h-screen bg-background font-notosans relative">
      {/* 오른쪽 상단 컬러 점 */}
      <div className="absolute top-10 right-16 flex gap-3 z-10">
        {colorDots.map((c, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
        ))}
      </div>
      {/* 중앙 컬러풀 타이틀 */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center select-none">
        <div className="text-[150px] font-skranji font-medium leading-tight">
          <span className="text-primaryblue">H</span>
          <span className="text-primarygreen">y</span>
          <span className="text-primaryblue">u</span>
          <span className="text-primaryyellow">n</span>
          <span className="text-black"> </span>
          <span className="text-primaryyellow">H</span>
          <span className="text-primarygreen">u</span>
          <span className="text-black">'s</span>
          <br />
          <span className="text-primaryred">P</span>
          <span className="text-primaryblue">O</span>
          <span className="text-primarygreen">R</span>
          <span className="text-primaryyellow">T</span>
          <span className="text-primaryred">F</span>
          <span className="text-primaryblue">O</span>
          <span className="text-primarygreen">L</span>
          <span className="text-primaryyellow">I</span>
          <span className="text-primaryred">O</span>
        </div>
      </div>
      {/* 파란색 말풍선(BubbleBox) - 화면 맨 아래, 가로 100% */}
      <div className="absolute left-0 bottom-0 w-full flex flex-col items-center z-20">
        <BubbleBox
          layout="horizontal"
          color="#6493E7"
          tailDirection="top"
          tailPosition={50}
          style={{
            background: '#F6C33B',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            minHeight: '430px',
            width: '100%',
            maxWidth: '100vw',
            padding: 0,
          }}
        >
          <div className="w-full flex flex-col gap-0.5">
            안에 내용
          </div>
        </BubbleBox>
        {/* 페이지네이션 */}
        <div className="absolute left-16 bottom-10 flex gap-3">
          {paginationDots.map(i => (
            <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-white/70' : 'bg-white'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro; 