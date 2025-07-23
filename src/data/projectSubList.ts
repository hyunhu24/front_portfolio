import { ProjectSubItem, SubBoxProps } from "../pages/project/ProjectSub";

const miruProjectSubList1: ProjectSubItem[] = [
    {
        title: "Lazy Loading 적용",
        subTitle: "React.lazy와 Suspense를 활용하여 비동기 컴포넌트 로딩",
        sub: "결과: 초기 페이지 로딩 속도가 약 40% 개선"
    },
    {
        title: "CSS 최적화",
        subTitle: "SCSS를 사용하여 중복된 스타일 제거 및 BEM 네이밍 규칙 적용",
    },
    {
        title: "코드 스플리팅 (Code Splitting)",
        subTitle: "Webpack의 dynamic import 기능 활용하여 특정 페이지에서만 필요한 모듈을 동적으로 로딩",
        sub: "결과: 불필요한 JS 로드를 줄여 성능 개선"
    }
]

// ✅ 타입에 맞게 객체로 수정!
export const miruSub1: SubBoxProps = {
    circleColor: "#f1605a",
    projectIcon: "projectIcon1",
    mainTitle: "React 컴포넌트 기반 개발 및 유지보수성 개선",
    items: miruProjectSubList1
};

export const miruSub2 = {
    circleColor: "#52A668",
    projectIcon: "projectIcon2",
    mainTitle: "유지보수성 개선",
    mainSubTitle: "유지보수성 개선",
    items: miruProjectSubList1
};

export const miruSub3 = {
    circleColor: "#6493E7",
    projectIcon: "projectIcon3",
    mainTitle: "반응형 웹 사이트 개발",
    mainSubTitle: "(PC / Tablet / Mobile)",
    items: miruProjectSubList1
};
