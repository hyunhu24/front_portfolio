import React from "react";
import { useNavigate } from "react-router-dom";

interface TitleItem{
    mainText? : string;
    subText? : string;
    navigateText? : string;
    linkUrl? : string;
}

interface ProjectMainTitleBoxProps {
    titleItems: TitleItem[];
    navigateUrl: string;
    pointColor: string;
    // navigateTo?: (url: string) => void;
}

const ProjectMainTitleBox: React.FC<ProjectMainTitleBoxProps> = ({ titleItems, navigateUrl, pointColor }) => {
    const navigate = useNavigate();

    const navigateTo = (url: string) => {
        navigate(url);
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {titleItems.map((item, index) => (
                <div key={index} className="">
                    {item.mainText && 
                    <div className="flex flex-col gap-4">
                        {/* bold 처리 해야 함 */}
                        <div className="w-fit text-[30px]"> 
                            <span className="text-[800]">{item.mainText} : </span>
                            {item.subText && <span className="">{item.subText}</span>}
                            {item.linkUrl && <a href={item.linkUrl} target="_blank" rel="noreferrer">{item.linkUrl}</a>}
                        </div>
                    </div>
                    }

                    {item.navigateText && <div
                        className="text-[25px] font-medium underline" 
                        style={{textDecorationColor: pointColor}} 
                        onClick={() => navigateTo(navigateUrl)}>{item.navigateText}</div>}
                </div>
            ))}

        </div>
    );
};

export default ProjectMainTitleBox;