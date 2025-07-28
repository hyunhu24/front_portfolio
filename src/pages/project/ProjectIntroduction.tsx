import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";
import PointText from "components/PointText";

interface ProjectIntroductionProps {
    title: string;
    searchTitle: string;
    page: number;
    project: string;
    pointColor: string;
    pointLightColor: string;
}

const ProjectIntroduction : React.FC<ProjectIntroductionProps> = ( { title, searchTitle, page, project, pointColor, pointLightColor } : ProjectIntroductionProps ) => {
    const handleSearchClick = () => {
        console.log("search");
    }
    return(
        <div id="project-sub" className="w-full h-screen bg-background font-notosans snap-center">
            <div className="w-full h-full flex-col items-center justify-center">
                <BubbleBox
                    layout="horizontal"
                    color={pointColor}
                    tailDirection="bottom"
                    tailPosition={10}
                    position="center"
                    style={{
                      background: pointColor,
                      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      height: '20%',
                      // minHeight: '430px',
                      width: '100%',
                      maxWidth: '100vw',
                      padding: 0,
                    }}
                >
                    <div className="w-full h-full flex items-center justify-end gap-0.5 pr-20">
                        <BubbleBoxTitle title={title} positionX="13%" positionY="3%" />
                        <SearchableListBox 
                            title={searchTitle}
                            items={[]}
                            icon={true}
                            showList={false}
                            readOnly={true}
                            onSearchClick={handleSearchClick}
                            bgColor={pointLightColor}
                            // activeColor='#EA8268'
                            width='400px'
                            searchTextSize='20px'
                            listTextSize='18px'
                        />
                    </div>
                </BubbleBox>
                <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px]">
                     <div className="w-[100%] h-[100%] flex items-center justify-center">
                        {/* <PointText text="프로젝트 설정 텍스트 컴포넌트" />
                        <PointText text="버전" responsiveText={true} responseText="Tablet" /> */}
                        <div className="w-full h-full flex items-center justify-center">
                            <img src={`/assets/images/project/${project}/${project}-${page}page.png`} alt={`${project}-${page}page`} className="h-full object-contain" />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectIntroduction;