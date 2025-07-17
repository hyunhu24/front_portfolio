import React from 'react'

interface SubTitleItem {
    sub?: string;
}

interface SkillBoxProps {
    mainTitle: string;
    subTitle: string;
    items: SubTitleItem[];
    result: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({
    mainTitle,
    subTitle,
    items,
    result
}) => {
    return (
        <div className='flex flex-col gap-[50px]'>
            <div className='flex gap-[20px] items-center'>
                <img src="/assets/images/project/skillIcon/idea.png" alt="idea" />
                <div>
                    <div className='text-[24px] font-bold'>{mainTitle}</div>
                    <div className='text-[22px] font-medium'>{subTitle}</div>
                </div>
            </div>
            <div className='flex gap-[20px] items-center'>
                <img src="/assets/images/project/skillIcon/check.png" alt="check" />
                <div>
                    {items.map((item, idx) => (
                        <div key={idx}>
                            <div className='text-[22px] font-regular'><span className='pr-2'>⦁</span>{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pl-[120px] text-[30px] font-black mt-[50px]'>{result}</div>
        </div>
    )
}

export default SkillBox;