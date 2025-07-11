import React from 'react';

interface BubbleBoxTitleProps {
    title: string;
    // position: 'left' | 'right';
    positionX: string;
    positionY: string;
    fontFamily?: string;
}

const BubbleBoxTitle: React.FC<BubbleBoxTitleProps> = ({ title, positionX, positionY, fontFamily }) => {
    return (
        <div className={`${fontFamily ? fontFamily : 'font-notosans'} text-white text-[70px] absolute bottom-2`} 
        // ${position === 'left' ? 'left-[13%]' : 'right-[13%]'}
            style={{ bottom: positionY, left: positionX }}>
                {title}
            </div>
        );
};

export default BubbleBoxTitle;