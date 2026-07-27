import React from "react";
import { twClasses, combineClasses } from "../styles/tailwindUtils";

interface InformItem {
    mainText? : string;
    subText? : string;
    sub? : string;
    linkUrl? : string;
}
interface InformImgItem{
    img? : string;
}

interface InformBoxProps {
    title?: string;
    pointColor?: string;
    items?: InformItem[];
    imgItems?: InformImgItem[];
}

const InformBox : React.FC<InformBoxProps> = ({
    title,
    pointColor = '#6493E7',
    items,
    imgItems
}) => {
    return(
        <div className="w-full h-full">
            <div className="text-[30px] font-black">{title}</div>
            <div className="my-2" style={{backgroundColor : pointColor, width: '100%', height: '6px'}}></div>
            {items && <div className="flex-col gap-[10px]">
                {items.map((item, idx) => (
                    <div className={combineClasses(twClasses.flexItemStart, "gap-2")} key={idx}>
                        <div className="w-[10px] h-[10px] m-2 rounded-full" 
                        style={{backgroundColor: pointColor}}></div>
                        <div className="flex-col gap-[2px] text-[18px] mb-1">
                            <div className="font-bold">{item.mainText}</div>
                            <div className="font-medium">
                                {item.subText} 
                                {item.sub && <span className="pl-[20px] text-[15px] font-normal">{item.sub}</span>}    
                            </div>
                            {item.linkUrl && <a href={item.linkUrl} target="_blank" rel="noreferrer" className="font-medium">{item.linkUrl}</a>}
                        </div>
                    </div>
                ))}
            </div>}
            {imgItems && 
                <div className="w-full py-4">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center"> 
                    {imgItems.map((item, idx) => (
                        <div key={idx} className="w-full max-w-24 min-w-16 flex items-center justify-center p-2">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/icon/${item.img}.png`} alt={`${item.img}`} 
                                className="w-full h-auto object-contain"/>
                        </div>
                    ))}
                    </div>              
                </div>
            }
        </div>
    )
}

export default InformBox;