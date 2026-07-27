import React, { useEffect, useState } from 'react';
import BubbleBox from 'components/BubbleBox';
import SearchableListBox from 'components/SearchableListBox';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useItems } from 'context/ItemContext';
import ProjectMainTitleBox from 'components/ProjectMainTitleBox';
import { colorDots } from 'data/colorList';

const paginationDots = [0, 1, 2, 3, 4, 5];

interface ProjectMainList {
  mainText?: string;
  subText?: string;
  linkUrl?: string;
  navigateText?: string;
}

interface ProjectMainProps {
  mainId: string;
  navigateId: string;
  pointColor: string;
  textColor: string;
  num: number;
  projectName: string;
  projectImage: string;
  projectPaddingTop: number;
  projectMainList: ProjectMainList[];
}
//mainId = project-main
// navigateId = project-sub
// pointColor = #F6C33B
// textColor = #F1605A
// num = 1
// projectName = MIRU
// projectImage = miru

const ProjectMain: React.FC<ProjectMainProps> = ({ mainId, navigateId, pointColor, textColor, num, projectName, projectImage, projectPaddingTop, projectMainList }) => {
  const navigateTo = (url: string) => {
    // 스크롤로 해당 섹션으로 이동하는 로직
    const element = document.getElementById(navigateId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id={mainId} className="w-full h-screen bg-background font-notosans snap-center">
      <div className='h-full w-full flex items-center justify-center'>
        <BubbleBox
          layout="vertical"
          color={pointColor}
          tailDirection="right"
          tailPosition={60}
          position="left"
          style={{
            background: pointColor,
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
              <span style={{color: textColor}}>0</span>{num}
              <br/>
              {projectName}
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

        <div className="w-[60%] h-full flex flex-col items-center justify-center relative ">

          
          <div className="absolute top-10 right-10 flex gap-3 z-10">
            {colorDots.map((c, i) => (
              <div key={i} className={`w-4 h-4 rounded-full ${c}`}></div>
            ))}
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img src={`${process.env.PUBLIC_URL}/assets/images/project/${projectImage}/${projectImage}-main.png`} alt="profile" className="absolute top-[38px] w-[90%] h-auto object-contain"/>
          </div>
          <div className="w-full h-full flex items-start justify-center" style={{paddingTop: `${projectPaddingTop}px`}}>
            <ProjectMainTitleBox 
              navigateUrl={"/project1Sub"} 
              pointColor={pointColor}
              navigateTo={navigateTo}
              titleItems={projectMainList} />
            </div>
        </div>
      </div>
        {/* 페이지네이션 */}
          
      
    </div>
  );
};

export default ProjectMain; 