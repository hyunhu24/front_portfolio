import React from 'react'

interface SubTitleItem {
    sub?: string;
}

interface TroubleShootingProps {
    img: string;
    title: string;
    items: SubTitleItem[];
}

const TroubleShooting: React.FC<TroubleShootingProps> = ({ img, title, items }) => {
  return (
    <div className='w-fit'>
      <div className='flex flex-row gap-[60px] items-center'>
        <img className='w-[110px] h-[110px]' src={`/assets/images/project/numIcon/${img}.png`} alt="troubleShooting1" />
        <div className='flex flex-col'>
          <div className='text-[30px] font-bold mb-[16px]'>{title}</div>
          {items.map((item, idx) => (
            <div key={idx} className='flex flex-col gap-[8px]'>
              <div className='text-[24px] font-medium'>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default TroubleShooting;