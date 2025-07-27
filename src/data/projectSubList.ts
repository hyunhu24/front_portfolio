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
const miruProjectSubList2: ProjectSubItem[] = [
    {
        subTitle: "컴포넌트 분리 원칙을 적용하여 재사용 가능한 UI 구조 설계",
    },
    {
        subTitle: "Header, Footer, Main, Sidebar 등 페이지 공통 요소를 모듈화",
    },
    {
        subTitle: "useContext와 useReducer를 활용해 글로벌 상태 관리",
    },
    {
        subTitle: "가독성과 유지보수성을 고려한 코드 설계",
    },
    {
        subTitle: "React.memo와 useCallback을 활용한 불필요한 렌더링 최소화",
    },
    {
        subTitle: "PropTypes를 적용하여 데이터 타입 검증",
    },
    {
        subTitle: "동적 데이터 관리 시 useEffect와 Custom Hook을 활용하여 코드 중복 제거",
    }
]

const miruProjectSubList3: ProjectSubItem[] = [
    {
        subTitle: "CSS Media Query 활용하여 화면 크기에 따라 유연한 레이아웃 적용",
    },
    {
        subTitle: "Grid & Flexbox 조합하여 요소 배치 최적화",
    },
    {
        subTitle: "성능 최적화를 위해 Intersection Observer API를 활용하여 불필요한 DOM 렌더링 방지",
    },
    {
        subTitle: "SVG 및 WebP 활용한 이미지 최적화",
    },
    {
        subTitle: "Dynamically Adaptive Typography 적용",
    }
]

const cookkingProjectSubList1: ProjectSubItem[] = [
    {
        subTitle: "다양한 외부 API와의 연동 경험을 바탕으로, 데이터 통신 구조를 체계적으로 설계하여 개발 효율성을 극대화하였습니다.",
    },
    {
        subTitle: "RESTful API, GraphQL 등 다양한 방식의 API 연동을 통해 프론트엔드와 백엔드 간의 데이터 흐름을 원활하게 관리하였으며, 비동기 처리와 에러 핸들링 로직을 체계적으로 구현하여 서비스의 안정성을 높였습니다.",
    },
    {
        subTitle: "API 응답 데이터의 타입 정의 및 관리, 캐싱 전략 등을 도입하여 불필요한 네트워크 요청을 최소화하고, 사용자 경험을 향상시켰습니다.",
    }
]

const cookkingProjectSubList2: ProjectSubItem[] = [
    {
        subTitle: "React의 커스텀 훅(Custom Hook) 패턴을 적극적으로 활용하여 반복되는 로직을 모듈화하고, 코드의 재사용성과 유지보수성을 크게 향상시켰습니다.",
    },
    {
        subTitle: "폼 상태 관리, API 호출, 공통 이벤트 처리 등 다양한 기능을 커스텀 훅으로 분리하여 프로젝트 전반에 걸쳐 일관된 개발 패턴을 유지하였습니다.",
    },
    {
        subTitle: "커스텀 훅 내부에서 useEffect, useReducer, useContext 등 다양한 React Hook을 조합하여 복잡한 상태와 로직도 효율적으로 관리할 수 있도록 설계하였습니다.",
    }
]

const cookkingProjectSubList3: ProjectSubItem[] = [
    {
        subTitle: "Tailwind CSS를 도입하여 빠르고 일관성 있는 UI 개발을 실현",
    },
    {
        subTitle: "Utility-first CSS 프레임워크의 장점을 살려, 별도의 CSS 파일 작성 없이도 직관적으로 스타일을 적용할 수 있었으며, 반응형 디자인과 다크 모드 등 다양한 UI 요구사항도 손쉽게 대응하였습니다.",
    },
    {
        subTitle: "클래스 네이밍 충돌이나 불필요한 스타일 중복 문제를 최소화하고, 디자인 시스템을 체계적으로 구축하여 유지보수와 확장성을 높였습니다.",
    }
]

const damoProjectSubList1: ProjectSubItem[] = [
    {
        title: "기술적 특징",
        subTitle: "네이티브 성능: 네이티브 컴포넌트와 모바일 특화 UI/UX 직접 구현",
        sub: "JavaScript 기반: 웹 개발 지식을 모바일로 확장 가능",
    },
    {
        title: "개발 경험",
        subTitle: "컴포넌트 재사용성: 웹과 모바일 간 컴포넌트 로직 공유",
        sub: "핫 리로딩: 실시간 코드 변경 반영으로 빠른 개발",
    },
    {
        title: "결과",
        subTitle: "웹 프론트엔드 경험을 모바일 환경으로 확장",
        sub: "다양한 디바이스에서 일관된 사용자 경험 제공",
    },
]

const damoProjectSubList2: ProjectSubItem[] = [
    {
        title: "개발 환경 구축",
        subTitle: "Expo CLI 활용: 빠른 개발 환경 구축 및 실시간 미리보기",
        sub: "개발자 도구: Expo DevTools를 통한 디버깅 및 성능 모니터링",
    },
    {
        title: "배포",
        subTitle: "클라우드 빌드: Expo 빌드/배포 기능을 활용",
        sub: "버전 관리: 자동화된 빌드 번호 및 버전 관리",
    },
    {
        title: "결과",
        subTitle: "개발-테스트-배포 전 과정을 자동화하여 생산성 및 협업 효율성 향상",
        sub: "팀 협업 시 일관된 개발 환경 제공",
    }
]
const damoProjectSubList3: ProjectSubItem[] = [
    {
        title: "상태 관리 전략",
        subTitle: "컨텍스트 분리: 기능별로 독립적인 Context 생성으로 관심사 분리",
        sub: "성능 최적화: useMemo, useCallback을 활용한 불필요한 리렌더링 방지",
    },
    {
        title: "컴포넌트 간 통신",
        subTitle: "커스텀 훅 개발: 컴포넌트 간 데이터 전달 구조 단순화",
        sub: "Provider 패턴: 앱 전체에서 일관된 상태 접근 방식 제공",
    },
    {
        title: "결과",
        subTitle: "Redux 등 외부 라이브러리 없이도 코드 복잡도 감소 및 유지보수성 향상",
        sub: "React 생태계 내에서 자연스러운 상태 관리 패턴 구현 및 번들 크기 최적화 및 런타임 성능 향상",
    },
]




export const miruSub1: SubBoxProps = {
    circleColor: "#f1605a",
    projectIcon: "projectIcon1",
    mainTitle: "React 컴포넌트 기반 개발 및 유지보수성 개선",
    items: miruProjectSubList1
};

export const miruSub2: SubBoxProps = {
    circleColor: "#52A668",
    projectIcon: "projectIcon2",
    mainTitle: "React 컴포넌트 기반 개발 및",
    mainSubTitle: "유지보수성 개선",
    items: miruProjectSubList2
};

export const miruSub3: SubBoxProps = {
    circleColor: "#6493E7",
    projectIcon: "projectIcon3",
    mainTitle: "반응형 웹 사이트 개발",
    mainSubTitle: "(PC / Tablet / Mobile)",
    items: miruProjectSubList3
};

export const cookkingSub1: SubBoxProps = {
    circleColor: "#F2C43D",
    projectIcon: "projectIcon2",
    mainTitle: "API 연동으로 개발 효율성",
    items: cookkingProjectSubList1
};

export const cookkingSub2: SubBoxProps = {
    circleColor: "#F1605A",
    projectIcon: "projectIcon1",
    mainTitle: "커스텀 훅으로 재사용",
    items: cookkingProjectSubList2
};

export const cookkingSub3: SubBoxProps = {
    circleColor: "#6493E7",
    projectIcon: "projectIcon4",
    mainTitle: "tailwind css 사용",
    items: cookkingProjectSubList3
};

export const damoSub1: SubBoxProps = {
    circleColor: "#F1605A",
    projectIcon: "projectIcon6",
    mainTitle: "리액트 네이티브 기반 모바일 앱 개발",
    items: damoProjectSubList1
};

export const damoSub2: SubBoxProps = {
    circleColor: "#F2C43D",
    projectIcon: "projectIcon2",
    mainTitle: "Expo 환경에서의 프로젝트 세팅",
    items: damoProjectSubList2
};

export const damoSub3: SubBoxProps = {
    circleColor: "#6493E7",
    projectIcon: "projectIcon5",
    mainTitle: "Context API를 활용한 글로벌 상태 관리",
    items: damoProjectSubList3
};



