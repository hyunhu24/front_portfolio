import React from "react";
import BubbleBox from "components/BubbleBox";
import InformBox from "components/InformBox";
import { combineClasses, twClasses } from "styles/tailwindUtils";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";

const ProjectSub : React.FC = () => {
    const handleSearchClick = () => {
        console.log("search");
    }
    return(
        <div id="project-sub" className="w-full h-screen bg-background font-notosans snap-center">
            <div className="w-full h-full flex-col items-center justify-center">
                <BubbleBox
                    layout="horizontal"
                    color="#F6C33B"
                    tailDirection="bottom"
                    tailPosition={10}
                    position="center"
                    style={{
                      background: '#F6C33B',
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
                            bgColor='#FBD462'
                            // activeColor='#EA8268'
                            width='400px'
                            searchTextSize='20px'
                            listTextSize='18px'
                        />
                    </div>
                </BubbleBox>
                <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px]">
                     <div className="border-2 border-red-500 w-[100%] h-[100%] flex flex-row gap-10">
                        <div className="w-[100%] h-[100%] bg-primaryred"></div>
                        <div className="w-[100%] h-[100%] bg-primarygreen"></div>
                        <div className="w-[100%] h-[100%] bg-primaryblue"></div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSub;