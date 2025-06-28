import React from "react";
import BubbleBox from "components/BubbleBox";
import InformBox from "components/InformBox";
import { combineClasses, twClasses } from "styles/tailwindUtils";

const ProjectSub : React.FC = () => {
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
                <div className="w-full h-[80%] flex gap-[100px] items-center justify-center p-[80px]">
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectSub;