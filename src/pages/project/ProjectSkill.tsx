import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";
import SkillBox from "components/SkillBox";

export interface ProjectSkillItem {
    sub?: string;
}

export interface skillProps {
    mainTitle: string;
    subTitle: string;
    items: ProjectSkillItem[];
    result: string;
}

interface ProjectSkillProps {
    pointColor?: string;
    pointLightColor?: string;
    searchTitle?: string;
    skillBox?: skillProps;
    project?: string;
}

const ProjectSkill : React.FC<ProjectSkillProps> = ( { pointColor, pointLightColor, searchTitle, skillBox, project } : ProjectSkillProps ) => {
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
                        <BubbleBoxTitle title="개발 주요 내용" positionX="13%" positionY="3%" />
                        <SearchableListBox 
                            title={"프로젝트 보기"}
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
                     <div className="w-[100%] h-[100%] flex flex-row gap-10 ">
                        <div className="w-[100%] h-[100%] pl-[60px] pt-[40px]">
                           <SkillBox
                            mainTitle={skillBox?.mainTitle || ""}
                            subTitle={skillBox?.subTitle || ""}
                            items={skillBox?.items || []}
                            result={skillBox?.result || ""}
                           />
                        </div>
                        <div className="w-[600px] ">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/project/${project}/${project}-code.png`} alt={`${project}-code`} className="h-full object-contain" />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSkill;