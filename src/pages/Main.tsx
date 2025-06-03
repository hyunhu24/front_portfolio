import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BubbleBox from '../components/BubbleBox';
import SearchableListBox from '../components/SearchableListBox';

const colorDots = [
  'bg-primaryblue',
  'bg-primarygreen',
  'bg-primaryyellow',
  'bg-primaryred',
  'bg-primaryyellow',
  'bg-primaryblue',
];

const paginationDots = [0, 1, 2, 3, 4, 5];

const Main: React.FC = () => {

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const itemsList = [
    {
      label: '성장과 도전을 멈추지 않는 개발자 채현후',
      onClick: () => navigate('/'),
    },
    {
      label: 'UI와 UX를 고민하는 프론트 개발자 채현후',
      active: true,
      onClick: () => navigate('/intro'),
    },
    {
      label: '새로운 도전을 통해 성장하는 프론트 개발자 채현후',
      onClick: () => navigate('/intro'),
    },
  ];

  return (
    <div className="w-full h-full min-h-screen bg-background font-notosans relative ">
      {/* 오른쪽 상단 컬러 점 */}
      <div className="absolute top-10 right-16 flex gap-3 z-10">
        {colorDots.map((c, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
        ))}
      </div>
      {/* 중앙 컬러풀 타이틀 */}
      {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center select-none"> */}
      <div className='h-full w-full flex-col items-center justify-center'>
        <div className="text-[10rem] h-[60%] w-[full] flex-col content-center justify-items-center items-center justify-center font-skranji font-medium leading-tight">
          <div className='w-[fit-content] flex gap-1 '>
            <span className="text-primaryblue">H</span>
            <span className="text-primarygreen">y</span>
            <span className="text-primaryblue">u</span>
            <span className="text-primaryyellow">n</span>
            <span className="text-black mr-10"> </span>
            <span className="text-primaryyellow">H</span>
            <span className="text-primarygreen">u</span>
            <span className="text-primaryred">'</span>
            <span className="text-primaryblue">s</span>
          </div>
          <div className='flex gap-1 '>
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
      {/* </div> */}
      {/* 파란색 말풍선(BubbleBox) - 화면 맨 아래, 가로 100% */}
      {/* <div className="absolute left-0 bottom-0 w-full flex flex-col items-center z-20 h-full"> */}
        <BubbleBox
          layout="horizontal"
          color="#6493E7"
          tailDirection="top"
          tailPosition={50}
          position="bottom"
          style={{
            background: '#6493E7',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: '40%',
            // minHeight: '430px',
            width: '100%',
            maxWidth: '100vw',
            padding: 0,
          }}
        >
          <div className="w-full flex flex-col gap-0.5">
            
              <SearchableListBox
                title="채현후"
                items = {itemsList}
                onClose={() => setOpen(false)}
              />
            
          </div>
        </BubbleBox>

      </div>
        {/* 페이지네이션 */}
        <div className="absolute left-16 bottom-10 flex gap-3">
          {paginationDots.map(i => (
            <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-white/70' : 'bg-white'}`}></div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Main; 