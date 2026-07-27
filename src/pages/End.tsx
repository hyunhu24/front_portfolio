import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import BubbleBox from '../components/BubbleBox';
import SearchableListBox from '../components/SearchableListBox';
import { useItems } from 'context/ItemContext';
import { colorDots } from 'data/colorList';

const paginationDots = [0, 1, 2, 3, 4, 5];

const End: React.FC = () => {

  const [, setOpen] = useState(true);
  const { setSelectedIndex } = useItems();
  // const navigate = useNavigate();

  const itemsList = [
    {
      label: '채현후',
      active: false,
      onClick: () => {
        setSelectedIndex(0);
        const element = document.getElementById('intro');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: '010 . 8673 . 7686',
      active: true,
      onClick: () => {
        setSelectedIndex(1);
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'gusgn24@gmail.com',
      active: false,
      onClick: () => {
        setSelectedIndex(2);
        const element = document.getElementById('intro');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      label: 'https://github.com/gusgn24',
      active: false,
      onClick: () => {
        setSelectedIndex(3);
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      },
    }
  ];

  return (
    <div id="main" className="w-full h-[100vh] min-h-screen bg-background font-notosans relative snap-center">
      {/* 오른쪽 상단 컬러 점 */}
      <div className="absolute bottom-[54%] left-16 flex gap-3 z-10">
        {colorDots.map((c, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
        ))}
      </div>
      {/* 중앙 컬러풀 타이틀 */}
      {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center select-none"> */}
      <div className='h-full w-full flex-col items-center justify-center'>
        <div className="text-[10rem] h-[50%] w-[full] flex-col content-center justify-items-center items-center justify-center font-skranji font-medium leading-tight">
          <div className='w-[fit-content] flex gap-1 '>
            <span className="text-primaryblue">T</span>
            <span className="text-primarygreen">h</span>
            <span className="text-primaryblue">a</span>
            <span className="text-primaryyellow">n</span>
            <span className="text-black">k</span>
            <span className="text-primaryyellow">s</span>
            <span className="text-primarygreen">!</span>
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
            height: '50%',
            // minHeight: '430px',
            width: '100%',
            maxWidth: '100vw',
            padding: 0,
          }}
        >
          <div className="w-full h-[100%] flex gap-0.5 pt-8 items-start justify-center">
              <SearchableListBox
                title="Contact"
                items = {itemsList}
                icon={false}
                onClose={() => setOpen(false)}
              />
          </div>
        </BubbleBox>

      </div>
        {/* 페이지네이션 */}
        <div className="absolute right-16 bottom-10 flex gap-3">
          {paginationDots.map(i => (
            <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-white/70' : 'bg-white'}`}></div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default End; 