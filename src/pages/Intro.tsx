import React, { useEffect, useState } from 'react';
import BubbleBox from '../components/BubbleBox';
import SearchableListBox from 'components/SearchableListBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { useItems } from 'context/ItemContext';

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
  const [isListVisible, setIsListVisible] = useState(false);
  const { selectedIndex, setSelectedIndex, items, selectedItem } = useItems();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(selectedItem, items, selectedItem);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const idx = parseInt(params.get('item') ?? '1', 10);
    if (!isNaN(idx) && idx >= 0 && idx < items.length) {
      setSelectedIndex(idx);
    }
  }, [location, setSelectedIndex, items.length]);

  const introItems = items.map((item, idx) => ({
    ...item,
    active: idx === selectedIndex,
    onClick: () => {
      setSelectedIndex(idx);
      navigate(`/intro?item=${idx}`);
    }
  }));

  const handleFocus = () => {
    setIsListVisible(true);
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
            padding: '50px 50px',
          }}
        >
          <div className="w-full h-full flex flex-col gap-[60px] justify-center items-center">
          <SearchableListBox 
            title={selectedItem.label}
            items={introItems}
            icon={true}
            showList={isListVisible}
            onFocus={handleFocus}
            onBlur={handleBlur}
            bgColor='#EF9F8B'
            activeColor='#EA8268'
            width='100%'
            searchTextSize='20px'
            listTextSize='18px'
          />
           <div className='w-full max-w-[700px] flex flex-col gap-6 items-start'>
          <div className='text-white text-[58px] font-bold'>
            {selectedItem.introText?.title}
          </div>
          <div className='text-white text-[40px] text-left whitespace-pre-line'>
            {selectedItem.introText?.subtitle}
          </div>
        </div>
        <div className='w-full max-w-[700px] flex flex-col gap-6 items-start'>
          {selectedItem.introText?.description.map((text, index) => (
            <div key={index} className='text-white text-[28px] text-left whitespace-pre-line'>
              {text}
            </div>
          ))}
        </div>
        </div>

        <div className="absolute left-[50%] translate-x-[-50%] bottom-10 flex gap-3">
          {paginationDots.map(i => (
            <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-white/70' : 'bg-white'}`}></div>
          ))}
        </div>
        </BubbleBox>
      </div>
        {/* 페이지네이션 */}
          
      
    </div>
  );
};

export default Intro; 