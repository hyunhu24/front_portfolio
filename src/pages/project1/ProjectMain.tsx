import React, { useEffect, useState } from 'react';
import BubbleBox from 'components/BubbleBox';
import SearchableListBox from 'components/SearchableListBox';
import { useLocation, useNavigate } from 'react-router-dom';
import { useItems } from 'context/ItemContext';
import ProjectMainTitleBox from 'components/ProjectMainTitleBox';

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
          <div className='flex items-center justify-center w-full h-full text-left text-white text-[100px] font-skranji font-[400]'>
            <div className='w-fit'>
              <span className='text-primaryred'>0</span>1
              <br/>
              MIRU
              <br/>
              Project
            </div>
          </div>
          
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
          <div className="w-full h-full flex items-end justify-center pb-[30px]">
            <ProjectMainTitleBox navigateUrl={"/project1Sub"} pointColor="#F6C33B" titleItems={[
                {
                  mainText: "프로젝트명",
                  subText: "MIRU",
                },
                {
                  mainText: "기여도",
                  subText: "70%",
                },
                {
                  mainText: "사용기술",
                  subText: "React, JS, CSS, Html5, Webpack, Babel, Git",
                },
                {
                  mainText: "프로젝트 기간",
                  subText: "2024.05.10 ~ 2024.06.17",
                },
                {
                  mainText: "배포 URL",
                  linkUrl: "https://miruworld.xyz/"
                },
                {
                  navigateText: "개발 주요 내용 보러가기"
                }
              ]} />
            </div>
        </div>
      </div>
        {/* 페이지네이션 */}
          
      
    </div>
  );
};

export default ProjectMain; 