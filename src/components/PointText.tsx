import React from 'react'

interface PointTextProps {
    pointColor?: string;
    responsiveText?: boolean;
    text?: string;
}

const PointText: React.FC<PointTextProps>  = ({ pointColor, responsiveText = false, text }) => {
    return (
        <>
        {responsiveText 
            ? 
            <div className='text-[20px] flex gap-[4px] items-center'>
                <div className='font-skranji font-bold'>Tablet</div>
                <div>{text}</div>
            </div>
            :
            <div className='flex gap-[10px] items-center'>
                <div className='w-[10px] h-[10px] bg-black rounded-full'></div>
                <div className='text-[24px] font-medium'>{text}</div>
            </div>
        }
            
            
        </>
    )
}

export default PointText;