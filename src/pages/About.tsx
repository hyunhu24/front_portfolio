import React from "react";
import BubbleBox from "components/BubbleBox";
import InformBox from "components/InformBox";


const About : React.FC = () => {

    return(
        <div className="w-full h-full min-h-screen bg-background font-notosans">
            <div className="w-full h-full flex-col items-center justify-center">
                <BubbleBox
                    layout="horizontal"
                    color="#F1605A"
                    tailDirection="bottom"
                    tailPosition={10}
                    position="center"
                    style={{
                      background: '#F1605A',
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
                    <div className="w-full flex flex-col gap-0.5">
                        안에 내용
                    </div>
                </BubbleBox>
                <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px] border border-black">
                    <div className="w-full h-full border border-black">
                         <InformBox title="test" items={[
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            // {mainText:"test1", subText:"subText1", sub:"sub"}
                        ]}/>
                    </div>
                    <div className="w-full h-full">
                        <InformBox title="test" pointColor="#F1605A" items={[
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            // {mainText:"test1", subText:"subText1", sub:"sub"}
                        ]}/>
                         <InformBox title="test" pointColor="#52A668" items={[
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            {mainText:"test1", subText:"subText1", sub:"sub"},
                            // {mainText:"test1", subText:"subText1", sub:"sub"}
                        ]}/>
                    </div>
                    <div className="w-full h-full">
                        <InformBox title="imgTest" pointColor="#F6C33B" imgItems={[
                            {img: "Html"},
                            {img: "Css"},
                            {img: "Javascript"},
                            {img: "Jquery"},
                            {img: "ReactNative"},
                            {img: "Java"},
                            {img: "Sass"},
                            {img: "Mysql"},
                            {img: "Figma"},
                            {img: "AdobePhotoshop"},
                            {img: "AdobeIllustrator"},
                            {img: "Github"},
                            {img: "Slack"},
                            {img: "Notion"},
                            {img: "Tailwind"},
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;