import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";
import SkillBox from "components/SkillBox";

const ProjectSkill : React.FC = () => {
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
                     <div className="w-[100%] h-[100%] flex flex-row gap-10 ">
                        <div className="w-[100%] h-[100%] pl-[60px] pt-[40px]">
                           <SkillBox
                            mainTitle="싱글 페이지 구조(Single Page Website)에서 사용자가 특정 섹션으로 빠르게 이동하는 기능이 필요"
                            subTitle="다만 , a href=`#id` 같은 HTML 의 기본 앵커 태그 방식이 아닌 다른 방식을 택해보려고 함!"
                            items={[
                                {
                                    sub: "개별 섹션에 id를 부여하고 onClick 이벤트와 scrollIntoView API를 활용하여 부드러운 이동 구현"
                                },
                                {
                                    sub: "기존 HTML 방식과의 차이를 고려하여 smooth behavior 적용"
                                },
                                {
                                    sub: "최적화 작업: debounce 기법을 적용하여 빠른 클릭에도 부드럽게 작동"
                                },
                            ]}
                            result="결과 = 부드러운 스크롤 효과를 추가하여 사용자 경험 향상"
                           />
                        </div>
                        <div className="w-[600px] ">
                            코드 이미지가 들어갈 공간
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSkill;