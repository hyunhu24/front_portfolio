import { skillProps } from "pages/project/ProjectSkill";

export const miruProjectSkillList: skillProps = 
    {
        mainTitle: "싱글 페이지 구조(Single Page Website)에서 사용자가 특정 섹션으로 빠르게 이동하는 기능이 필요",
        subTitle: "다만 , a href=`#id` 같은 HTML 의 기본 앵커 태그 방식이 아닌 다른 방식을 택해보려고 함!",
        items: [
            {
                sub: "개별 섹션에 id를 부여하고 onClick 이벤트와 scrollIntoView API를 활용하여 부드러운 이동 구현"
            },
            {
                sub: "기존 HTML 방식과의 차이를 고려하여 smooth behavior 적용"
            },
            {
                sub: "최적화 작업: debounce 기법을 적용하여 빠른 클릭에도 부드럽게 작동"
            }
        ],
        result: "결과 = 부드러운 스크롤 효과를 추가하여 사용자 경험 향상"
    }

    export const cookkingProjectSkillList: skillProps = 
    {
        mainTitle: "사용자가 밥풀(가상 화폐)을 구매할 수 있도록 외부 결제 API(토스페이먼츠) 연동이 필요함",
        subTitle: "단, 단순 결제 버튼이 아닌, 실제 결제 창 호출 및 결제 성공/실패 처리까지 자동화된 흐름을 구현하고자 함",
        items: [
            {
                sub: "결제 상품 클릭 시 결제 페이지에서 토스페이먼츠 SDK를 동적으로 로드"
            },
            {
                sub: "백엔드에 결제 요청 → 받은 정보로 결제창 오픈→ 결제 성공/실패 시 모달로 명확한 안내 제공"
            },
            {
                sub: "최적화 작업: 결제 중 중복 클릭 방지"
            }
        ],
        result: "결과 = 외부 결제 연동으로 안전하고 자동화된 결제 제공, 사용자 신뢰도 및 편의성 향상"
    }

    export const damoProjectSkillList: skillProps = 
    {
        mainTitle: "사용자가 안전하게 앱을 이용할 수 있도록 사용자 인증(로그인/회원가입) 기능이 필요함",
        subTitle: "단순히 로그인 버튼만 구현하는 것이 아니라,실제 입력값 검증, 서버와의 통신, 인증 상태 관리, 에러 처리, 자동 로그인 등실제 서비스에서 요구되는 인증 플로우를 완성도 있게 구현하고자 함",
        items: [
            {
                sub: "회원가입/로그인 화면에서 입력값(이메일, 비밀번호 등) 실시간 검증"
            },
            {
                sub: "로그인 시 서버에 인증 요청 → 응답 받은 토큰을 Context API로 전역 관리"
            },
            {
                sub: "인증 실패/성공에 따라 명확한 안내 메시지 및 화면 전환 처리"
            },
            {
                sub: "자동 로그인 및 로그아웃 기능 구현"
            },
            {
                sub: "최적화 작업: 불필요한 렌더링 방지, UX 개선(로딩 인디케이터, 에러 메시지 등)"
            }
        ],
        result: "결과 = 부드러운 스크롤 효과를 추가하여 사용자 경험 향상"
    }
