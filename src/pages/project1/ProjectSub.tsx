import React from "react";
import BubbleBox from "components/BubbleBox";
import BubbleBoxTitle from "components/BubbleBoxTitle";
import SearchableListBox from "components/SearchableListBox";
import ProjectSubBox from "components/ProjectSubBox";

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
                     <div className="w-[100%] h-[100%] flex flex-row gap-10">
                        <div className="w-[100%] h-[100%] ">
                            <ProjectSubBox 
                                pointColor="#f1605a"
                                img="projectIcon1"
                                mainTitle="성능 최적화 및 유지보수 고려"
                                items={[
                                    {
                                        title: "Lazy Loading 적용",
                                        subTitle: "React.lazy와 Suspense를 활용하여 비동기 컴포넌트 로딩",
                                        sub: "결과: 초기 페이지 로딩 속도가 약 40% 개선"
                                    },
                                    {
                                        title: "CSS 최적화",
                                        subTitle: "SCSS를 사용하여 중복된 스타일 제거 및 BEM 네이밍 규칙 적용",
                                    },
                                    {
                                        title: "코드 스플리팅 (Code Splitting)",
                                        subTitle: "Webpack의 dynamic import 기능 활용하여 특정 페이지에서만 필요한 모듈을 동적으로 로딩",
                                        sub: "결과: 불필요한 JS 로드를 줄여 성능 개선"
                                    }
                                ]}
                            />
                        </div>
                        <div className="w-[100%] h-[100%]">
                            <ProjectSubBox 
                                pointColor="#52A668"
                                img="projectIcon2"
                                mainTitle="React 컴포넌트 기반 개발 및 "
                                mainSubTitle="유지보수성 개선"
                                items={[
                                    {
                                        title: "Lazy Loading 적용",
                                        subTitle: "React.lazy와 Suspense를 활용하여 비동기 컴포넌트 로딩",
                                        sub: "결과: 초기 페이지 로딩 속도가 약 40% 개선"
                                    },
                                    {
                                        title: "CSS 최적화",
                                        subTitle: "SCSS를 사용하여 중복된 스타일 제거 및 BEM 네이밍 규칙 적용",
                                    },
                                    {
                                        title: "코드 스플리팅 (Code Splitting)",
                                        subTitle: "Webpack의 dynamic import 기능 활용하여 특정 페이지에서만 필요한 모듈을 동적으로 로딩",
                                        sub: "결과: 불필요한 JS 로드를 줄여 성능 개선"
                                    }
                                ]}
                            />
                        </div>
                        <div className="w-[100%] h-[100%]">
                            <ProjectSubBox 
                                pointColor="#6493E7"
                                img="projectIcon3"
                                mainTitle="반응형 웹 사이트 개발"
                                mainSubTitle="(PC / Tablet / Mobile)"
                                items={[
                                    {
                                        title: "Lazy Loading 적용",
                                        subTitle: "React.lazy와 Suspense를 활용하여 비동기 컴포넌트 로딩",
                                        sub: "결과: 초기 페이지 로딩 속도가 약 40% 개선"
                                    },
                                    {
                                        title: "CSS 최적화",
                                        subTitle: "SCSS를 사용하여 중복된 스타일 제거 및 BEM 네이밍 규칙 적용",
                                    },
                                    {
                                        title: "코드 스플리팅 (Code Splitting)",
                                        subTitle: "Webpack의 dynamic import 기능 활용하여 특정 페이지에서만 필요한 모듈을 동적으로 로딩",
                                        sub: "결과: 불필요한 JS 로드를 줄여 성능 개선"
                                    }
                                ]}
                            />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSub;