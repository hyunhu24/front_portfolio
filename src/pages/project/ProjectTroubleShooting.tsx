import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";
import SkillBox from "components/SkillBox";
import TroubleShooting from "components/TroubleShooting";

const ProjectTroubleShooting : React.FC = () => {
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
                    tailPosition={27}
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
                        <BubbleBoxTitle title="문제 해결 과정" positionX="30%" positionY="3%" />
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
                     <div className="w-[100%] h-[100%] flex flex-row gap-10 items-center justify-center">
                        <div className="w-fit h-[100%] flex flex-col gap-[100px] items-start justify-center">
                            <TroubleShooting img="1" title="타이트한 일정 속에서도 효율적인 협업"
                             items={[
                                {
                                    sub: "클라이언트 측 요청으로 예상보다 많은 기능 추가 요청 발생 → 일정 압박"
                                },
                                {
                                    sub: "해결 방법: 개발팀 간 명확한 역할 분배 및 Git 브랜치 전략을 활용하여 병렬 작업 수행"
                                },
                                {
                                    sub: "결과: 타이트한 일정에도 불구하고 기한 내 모든 요구 사항 반영"
                                }
                             ]} />
                             <TroubleShooting img="2" title="React를 활용한 첫 번째 책갈피 기능 구현"
                             items={[
                                {
                                    sub: "기존 HTML/CSS 방식과는 다른 접근 방식이 필요했음"
                                },
                                {
                                    sub: "해결 방법: scrollIntoView를 활용해 부드러운 스크롤 이동을 구현"
                                },
                                {
                                    sub: "결과: 사용자 경험 향상 및 React 기반의 앵커 네비게이션 구현"
                                }
                             ]} />
                        </div>
                        
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTroubleShooting;