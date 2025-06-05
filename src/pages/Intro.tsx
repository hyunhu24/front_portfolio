import React, { useState } from 'react';
import BubbleBox from '../components/BubbleBox';
import SearchableListBox from 'components/SearchableListBox';
import { useNavigate } from 'react-router-dom';
import { IconType } from 'react-icons';
import { IoIosSearch } from "react-icons/io";

const MyIcon: IconType = IoIosSearch;

const colorDots = [
  'bg-primaryred',
  'bg-primaryyellow',
  'bg-primarygreen',
  'bg-primaryyellow',
  'bg-primaryred',
  'bg-primaryblue',
];

const paginationDots = [0, 1, 2, 3, 4, 5];

const Intro: React.FC = () => {
  const navigate = useNavigate();
  const [isListVisible, setIsListVisible] = useState(false);

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

  const handleFocus = () => {
    setIsListVisible(true);
  };

  const handleClose = () => {
    setIsListVisible(false);
  };

  const handleBlur = () => {
    setIsListVisible(false);
  };

  return (
    <div className="w-full h-full min-h-screen bg-background font-notosans">
      {/* 오른쪽 상단 컬러 점 */}
     
      {/* 중앙 컬러풀 타이틀 */}
      <div className='h-full w-full flex items-center justify-center'>
        <div className="w-[50%] h-full flex items-center justify-center relative ">

          <div className="absolute top-10 right-[50%] translate-x-[50%] flex gap-3 z-10">
            {colorDots.map((c, i) => (
              <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
            ))}
          </div>
          
        </div>

      {/* 파란색 말풍선(BubbleBox) - 화면 맨 아래, 가로 100% */}
        <BubbleBox
          layout="vertical"
          color="#F1605A"
          tailDirection="left"
          tailPosition={25}
          position="right"
          style={{
            background: '#F1605A',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: '100%',
            // minHeight: '430px',
            width: '50%',
            maxWidth: '50vw',
            padding: 0,
          }}
        >
          <div className="w-full flex flex-col gap-0.5">
            <SearchableListBox 
              title="채현후" 
              items={itemsList} 
              IconName={MyIcon}
              icon={true}  // true면 MyIcon이 표시되고, false면 '✕'가 표시됨
              showList={isListVisible}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
  );
};

export default Intro; 