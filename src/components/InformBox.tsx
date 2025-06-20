import React from "react";

interface InformItem {
    mainText? : string;
    subText? : string;
    sub? : string;
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
        <div>
            <div className="text-[25px] font-black">{title}</div>
            <div className="my-2" style={{backgroundColor : pointColor, width: '100%', height: '6px'}}></div>
            {items && <div className="flex-col gap-[10px]">
                {items.map((item, idx) => (
                    <div className="flex items-start gap-2" key={idx}>
                        <div className="w-[10px] h-[10px] m-2 rounded-full" 
                        style={{backgroundColor: pointColor}}></div>
                        <div className="flex-col gap-[2px] text-[18px]">
                            <div className="font-bold">{item.mainText}</div>
                            <div className="font-medium">
                                {item.subText} 
                                {item.sub && <span className="pl-[20px] text-[15px] font-normal">{item.sub}</span>}    
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
            {imgItems && 
                <div className="flex justify-center w-full">
                    <div className=" w-[340px] flex flex-wrap gap-[40px] items-center py-4"> 
                    {imgItems.map((item, idx) => (
                        <div key={idx} className="w-[55px] h-[55px] flex items-center justify-center">
                            <img src={`/assets/images/icon/${item.img}.png`} alt={`${item.img}`} 
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