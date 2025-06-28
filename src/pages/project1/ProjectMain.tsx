import React, { useEffect, useState } from 'react';
import BubbleBox from 'components/BubbleBox';
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

const ProjectMain: React.FC = () => {
 

  return (
    <div className="w-full h-full min-h-screen bg-background font-notosans">

      <div className='h-full w-full flex items-center justify-center'>
        

        <BubbleBox
          layout="vertical"
          color="#F6C33B"
          tailDirection="right"
          tailPosition={60}
          position="left"
          style={{
            background: '#F6C33B',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: '100%',
            // minHeight: '430px',
            width: '40%',
            maxWidth: '50vw',
            padding: '50px 50px',
          }}
        >
          
          <div className="absolute left-[50%] translate-x-[-50%] bottom-10 flex gap-3">
            {paginationDots.map(i => (
              <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-white/70' : 'bg-white'}`}></div>
            ))}
          </div>
        </BubbleBox>

        <div className="w-[60%] h-full flex items-center justify-center relative ">

          
          <div className="absolute top-10 right-10 flex gap-3 z-10">
            {colorDots.map((c, i) => (
              <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
            ))}
          </div>
        </div>
      </div>
        {/* 페이지네이션 */}
          
      
    </div>
  );
};

export default ProjectMain; 