import React from 'react'

interface SubTitleItem {
    sub?: string;
}

interface Section {
    title: string;
    items: SubTitleItem[];
}

interface TroubleShootingProps {
    img: string;
    sections: Section[];
}

const TroubleShooting: React.FC<TroubleShootingProps> = ({ img, sections }) => {
  return (
    <div className='w-fit max-w-[1030px]'>
      <div className='flex flex-row gap-[40px] items-start'>
        <img className='w-[110px] h-[110px]' src={`${process.env.PUBLIC_URL}/assets/images/project/numIcon/${img}.png`} alt="troubleShooting1" />
        <div className='flex flex-col gap-[8px]'>
          {/* <div className='text-[30px] font-bold mb-[16px]'>{mainTitle}</div> */}
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className='flex flex-col gap-[8px]'>
                <div className='text-[30px] font-bold mb-[4px]'>{section.title}</div>
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className='text-[24px] font-medium ml-[16px] flex flex-row gap-[16px] items-start'>
                    <div>•</div> 
                    <div>{item.sub}</div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default TroubleShooting;