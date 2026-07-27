import React from "react";
import BubbleBox from "components/BubbleBox";
import InformBox from "components/InformBox";
import { combineClasses, twClasses } from "styles/tailwindUtils";
import SearchableListBox from "components/SearchableListBox";
// import { useNavigate } from "react-router-dom";
import BubbleBoxTitle from "components/BubbleBoxTitle";

const About: React.FC = () => {
  // const navigate = useNavigate();

  const handleSearchClick = () => {
    // 프로젝트 페이지로 스크롤 이동
    const element = document.getElementById("project-main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="about"
      className="w-full h-screen bg-background font-notosans snap-center"
    >
      <div className="w-full h-full flex-col items-center justify-center">
        <BubbleBox
          layout="horizontal"
          color="#F1605A"
          tailDirection="bottom"
          tailPosition={10}
          position="center"
          style={{
            background: "#F1605A",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: "20%",
            // minHeight: '430px',
            width: "100%",
            maxWidth: "100vw",
            padding: 0,
          }}
        >
          <div className="w-full h-full flex items-center justify-end gap-0.5 pr-20">
            <BubbleBoxTitle
              title="About Me"
              positionX="13%"
              positionY="3%"
              fontFamily="font-skranji"
            />
            <SearchableListBox
              title={"프로젝트 보기"}
              items={[]}
              icon={true}
              showList={false}
              readOnly={true}
              onSearchClick={handleSearchClick}
              bgColor="#EF9F8B"
              activeColor="#EA8268"
              width="400px"
              searchTextSize="20px"
              listTextSize="18px"
            />
          </div>
        </BubbleBox>
        <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px]">
          <div
            className={combineClasses(
              twClasses.flexColBetween,
              "h-full w-full",
            )}
          >
            <div className="w-[100%] h-[50%] flex items-start justify-start pl-10">
              <img
                src="/assets/images/about/profile_about.png"
                alt="profile"
                className="w-[230px] h-auto object-contain"
              />
            </div>
            <div className="w-[100%] h-[50%] flex items-start justify-center">
              <InformBox
                title="개인정보"
                items={[
                  { mainText: "Phone", subText: "010.8673.7686" },
                  { mainText: "Email", subText: "gusgn24@gmail.com" },
                  {
                    mainText: "Github",
                    linkUrl: "https://github.com/hyunhu24",
                  },
                  { mainText: "Blog", linkUrl: "https://hoostudy.tistory.com" },
                ]}
              />
            </div>
          </div>
          <div
            className={combineClasses(
              twClasses.flexColBetween,
              "h-full w-full",
            )}
          >
            <InformBox
              title="경력"
              pointColor="#F1605A"
              items={[
                {
                  mainText: "직트럭",
                  subText: "2025.11 - 2026.08",
                  sub: "프론트 개발자",
                },
                {
                  mainText: "크리에이티브 코드",
                  subText: "2023.07 - 2024.10",
                  sub: "퍼블리싱 및 프론트 앤드",
                },
                {
                  mainText: "하바킨더슐레 (비개발)",
                  subText: "2021.03 - 2022.02",
                  sub: "담임 1년",
                },

                // {mainText:"test1", subText:"subText1", sub:"sub"}
              ]}
            />
            <InformBox
              title="학력/교육"
              pointColor="#52A668"
              items={[
                {
                  mainText: "호서전문학교",
                  subText: "2016.03 - 2017.02",
                  sub: "호텔조리학과",
                },
                {
                  mainText: "국가평생진흥원",
                  subText: "2019.01 - 2021.01",
                  sub: "사회복지학과",
                },
                {
                  mainText: "이젠아카데미",
                  subText: "2022.12 - 2023.05",
                  sub: "디자인 및 퍼블리싱 교육과정",
                },
                {
                  mainText: "중앙정보처리학원",
                  subText: "2024.11 ~ 2025.05",
                  sub: "프론트 & 백앤드 개발 교육과정",
                },
                // {mainText:"test1", subText:"subText1", sub:"sub"}
              ]}
            />
          </div>
          <div className="w-full h-full">
            <InformBox
              title="Skills & tool"
              pointColor="#F6C33B"
              imgItems={[
                { img: "Html" },
                { img: "Css" },
                { img: "Javascript" },
                { img: "Jquery" },
                { img: "ReactNative" },
                { img: "Java" },
                { img: "Sass" },
                { img: "Mysql" },
                { img: "Figma" },
                { img: "AdobePhotoshop" },
                { img: "AdobeIllustrator" },
                { img: "GitHub" },
                { img: "Slack" },
                { img: "Notion" },
                { img: "Tailwind" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
