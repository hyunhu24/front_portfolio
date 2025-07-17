import React from 'react';

interface SubTitleItem {
    title?: string;
    subTitle?: string;
    sub?: string;
}

interface ProjectSubProps {
    pointColor?: string;
    img?:string;
    mainTitle?:string;
    mainSubTitle?:string;
    items?: SubTitleItem[];
}

const ProjectSubBox: React.FC<ProjectSubProps> = ({
    pointColor = '#f1605a',
    img = 'projectIcon1',
    mainTitle = 'test1',
    mainSubTitle,
    items = []
}) => {
    return (
        <div className="w-[100%] h-[100%]">
            {/* 위에 */}
            <div className='w-[100%] h-[55%] flex flex-col items-center justify-between gap-[10px]'>
                {/* 프로젝트 아이콘 이미지 , 배경 색상 props 설정 */}
                <div
                    style={{backgroundColor : pointColor}}
                    className='w-[35%] h-auto aspect-square rounded-full flex items-center justify-center'>
                    <img src={`/assets/images/project/icon/${img}.png`} alt="projectIcon1"
                        className='w-[35%] h-[35%] object-cover' />
                </div>
                {/* 개발 포인트 타이틀 */}
                <div className='text-[24px] text-center font-bold h-[70px]'>{mainTitle} <br /> {mainSubTitle && mainSubTitle}</div>
                {/* 보더 영역 / 색상 props 설정 */}
                <div style={{backgroundColor : pointColor}} className='h-[7px] w-[100%] rounded-full'></div>
            </div>
            <div className='p-4 text-[16px] font-medium'>
                {items?.map((item, idx) => (
                    <div key={idx} className='mb-2'>
                        {item.title && <div className='font-bold'>{item.title}</div>}
                        {item.subTitle && <div className='pl-2'><span className='pr-2'>⦁</span> {item.subTitle}</div>}
                        {item.sub && <div className='pl-2'><span className='pr-2'>⦁</span> {item.sub}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectSubBox;