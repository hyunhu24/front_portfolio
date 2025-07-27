import { TroubleShootingItem } from "pages/project/ProjectTroubleShooting";

// MIRU 프로젝트 트러블슈팅 데이터
export const miruTroubleShootingList: TroubleShootingItem[] = [
    {
        img: "1",
        sections: [
            {
                title: "타이트한 일정 속에서도 효율적인 협업",
                items: [
                    {
                        sub: "클라이언트 측 요청으로 예상보다 많은 기능 추가 요청 발생 → 일정 압박"
                    },
                    {
                        sub: "해결 방법: 개발팀 간 명확한 역할 분배 및 Git 브랜치 전략을 활용하여 병렬 작업 수행"
                    },
                    {
                        sub: "결과: 타이트한 일정에도 불구하고 기한 내 모든 요구 사항 반영"
                    }
                ]
            }
        ]
    },
    {
        img: "2",
        sections: [
            {
                title: "React를 활용한 첫 번째 책갈피 기능 구현",
                items: [
                    {
                        sub: "기존 HTML/CSS 방식과는 다른 접근 방식이 필요했음"
                    },
                    {
                        sub: "해결 방법: scrollIntoView를 활용해 부드러운 스크롤 이동을 구현"
                    },
                    {
                        sub: "결과: 사용자 경험 향상 및 React 기반의 앵커 네비게이션 구현"
                    }
                ]
            }
        ]
    }
];

// CooKKing 프로젝트 트러블슈팅 데이터 
export const cookkingTroubleShootingList1: TroubleShootingItem[] = [
    {
        img: "1",
        sections: [
            {
                title: "API 중복검증 로직 개선 (Authentication Logic)문제",
                items: [
                    {
                        sub: "회원가입 시 아이디 중복검증이 정상적으로 동작하지 않음"
                    },
                    {
                        sub: "서버 API 스펙과 클라이언트 요청 데이터 구조 불일치로 인해 항상 false만 반환되는 문제 발생"
                    }
                ]
            },
            {
                title: "해결방법",
                items: [
                    {
                        sub: "서버 API 스펙에 맞춰 클라이언트에서 전송하는 데이터 구조를 조건부로 분기 처리"
                    },
                    {
                        sub: "아이디 중복검증 시 type이 \"id\"일 경우 loginId로, 그 외에는 기존 방식으로 데이터 전송"
                    },
                    {
                        sub: "실제 응답 값을 기반으로 중복 여부를 처리하도록 로직 수정"
                    }
                ]
            },
            {
                title: "결과",
                items: [
                    {
                        sub: "회원가입 시 아이디 중복검증이 정상적으로 동작"
                    },
                    {
                        sub: "서버와의 데이터 구조 불일치 문제 해결"
                    },
                    {
                        sub: "사용자 경험 및 인증 로직 신뢰성 향상"
                    }
                ]
            }
        ]
    }
];

export const cookkingTroubleShootingList2: TroubleShootingItem[] = [
    {
        img: "2",
        sections: [
            {
                title: "대규모 컴포넌트 리팩토링 (Architecture Improvement)문제",
                items: [
                    {
                        sub: "전체 애플리케이션에서 다수의 페이지가 동시에 오류 발생"
                    },
                    {
                        sub: "컴포넌트 간 의존성 문제로 인한 전역적 오류 확산"
                    }
                ]
            },
            {
                title: "해결방법",
                items: [
                    {
                        sub: "8개 파일에 걸쳐 618줄 추가, 461줄 삭제하는 대규모 리팩토링 진행"
                    },
                    {
                        sub: "API 호출 로직 분리(menuService.js), 레이아웃 구조 개선(Layout.js), 로그인 모달 분리(LoginModal.js), 메인/상세 페이지 컴포넌트 최적화(Main.js, PostDetail.js) 등"
                    },
                    {
                        sub: "컴포넌트 설계 원칙에 따라 역할 분리 및 의존성 최소화"
                    }
                ]
            },
            {
                title: "결과",
                items: [
                    {
                        sub: "컴포넌트 간 의존성 문제 해결 및 오류 전파 방지"
                    },
                    {
                        sub: "코드 가독성 및 유지보수성 대폭 향상"
                    },
                    {
                        sub: "서비스 전체의 안정성 및 확장성 개선"
                    }
                ]
            }
        ]
    }
];

// Damo 프로젝트 트러블슈팅 데이터
export const damoTroubleShootingList1: TroubleShootingItem[] = [
    {
        img: "1",
        sections: [
            {
                title: "API 데이터 처리 및 안정성 개선 문제",
                items: [
                    {
                        sub: "외부 API에서 데이터를 받아올 때 데이터 구조가 불안정하거나 예외 상황이 자주 발생"
                    },
                    {
                        sub: "네트워크 오류, 데이터 누락 등으로 인해 화면이 정상적으로 렌더링되지 않는 문제 발생"
                    },
                    {
                        sub: "서버 응답이 느릴 때 사용자 경험 저하"
                    }
                ]
            },
            {
                title: "해결방법",
                items: [
                    {
                        sub: "Axios 인스턴스에 에러 핸들링 로직 추가"
                    },
                    {
                        sub: "API 응답 데이터의 타입 및 값 검증 로직 구현"
                    },
                    {
                        sub: "try-catch문을 활용해 예외 상황에 대한 사용자 안내 메시지 제공"
                    },
                    {
                        sub: "데이터 로딩 상태를 명확히 관리하여, 로딩 중/에러/정상 상태에 따라 UI 분기 처리"
                    }
                ]
            },
            {
                title: "결과",
                items: [
                    {
                        sub: "예외 상황에서도 앱이 안정적으로 동작"
                    },
                    {
                        sub: "사용자에게 명확한 안내 메시지 제공"
                    },
                    {
                        sub: "데이터 처리 신뢰성 및 사용자 경험 향상"
                    }
                ]
            }
        ]
    }
]; 

export const damoTroubleShootingList2: TroubleShootingItem[] = [
    {
        img: "2",
        sections: [
            {
                title: "React 상태 값 동기화 최적화 문제",
                items: [
                    {
                        sub: "여러 컴포넌트에서 동일한 상태 값을 공유할 때, 값이 즉시 반영되지 않거나 불일치 현상 발생"
                    },
                    {
                        sub: "상태 변경이 비동기적으로 처리되어, 화면에 최신 데이터가 반영되지 않는 문제"
                    }
                ]
            },
            {
                title: "해결방법",
                items: [
                    {
                        sub: "Context API와 Custom Hook을 활용하여 전역 상태를 일관성 있게 관리"
                    },
                    {
                        sub: "useEffect, useState, useContext 등 React의 상태 관리 훅을 적절히 조합"
                    },
                    {
                        sub: "상태 변경 시 의존성 배열을 명확히 지정하여, 필요한 시점에만 리렌더링 되도록 최적화"
                    }
                ]
            },
            {
                title: "결과",
                items: [
                    {
                        sub: "상태 값이 여러 컴포넌트에서 실시간으로 일관성 있게 반영"
                    },
                    {
                        sub: "불필요한 렌더링 감소 및 성능 개선"
                    },
                    {
                        sub: "사용자 인터페이스의 신뢰성과 반응성 향상"
                    }
                ]
            }
        ]
    }
]; 