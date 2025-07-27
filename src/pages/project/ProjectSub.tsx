import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";


export interface ProjectSubItem {
    title?: string;
    subTitle?: string;
    sub?: string;
}

 export interface SubBoxProps {
    projectIcon?: string;
    circleColor?: string;
    mainTitle?: string;
    mainSubTitle?: string;
    items?: ProjectSubItem[];
}


interface ProjectSubProps {
    pointColor: string;
    pointLightColor: string;
    searchTitle: string;
    subBox1?: SubBoxProps;
    subBox2?: SubBoxProps;
    subBox3?: SubBoxProps;
    miruProject?: boolean;
}

//pointColor = #F6C33B
//pointLightColor = #FBD462
//searchTitle = 프로젝트 보기
//pointColor1 = #f1605a
//pointColor2 = #52A668
//pointColor3 = #6493E7
//projectIcon1 = projectIcon1
//projectIcon2 = projectIcon2
//projectIcon3 = projectIcon3

const ProjectSub : React.FC<ProjectSubProps> = ({ pointColor, pointLightColor, subBox1, subBox2, subBox3, searchTitle, miruProject }) => {
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
                            title={searchTitle}
                            items={[]}
                            icon={true}
                            showList={false}
                            readOnly={true}
                            onSearchClick={handleSearchClick}
                            bgColor={pointLightColor}
                            width='400px'
                            searchTextSize='20px'
                            listTextSize='18px'
                        />
                    </div>
                </BubbleBox>
                <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px]">
                     <div className="w-[100%] h-[100%] flex flex-row gap-10">
                        <div className="w-[100%] h-[100%] ">
                            <ProjectSubBox 
                                pointColor={subBox1?.circleColor}
                                img={subBox1?.projectIcon}
                                mainTitle={subBox1?.mainTitle}
                                items={subBox1?.items}
                                miruProject={miruProject}
                            />
                        </div>
                        <div className="w-[100%] h-[100%]">
                            <ProjectSubBox 
                                pointColor={subBox2?.circleColor}
                                img={subBox2?.projectIcon}
                                mainTitle={subBox2?.mainTitle}
                                mainSubTitle={subBox2?.mainSubTitle}
                                items={subBox2?.items} 
                                miruProject={miruProject}
                            />
                        </div>
                        <div className="w-[100%] h-[100%]">
                            <ProjectSubBox 
                                pointColor={subBox3?.circleColor}
                                img={subBox3?.projectIcon}
                                mainTitle={subBox3?.mainTitle}
                                mainSubTitle={subBox3?.mainSubTitle}
                                items={subBox3?.items}
                                miruProject={miruProject}
                            />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSub;