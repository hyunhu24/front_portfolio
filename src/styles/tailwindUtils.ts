// 자주 사용하는 Tailwind CSS 클래스들을 함수로 관리
export const twClasses = {
  // Flex 관련
  flexColBetween: 'flex flex-col justify-between',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexStart: 'flex items-center justify-start',
  flexEnd: 'flex items-center justify-end',
  flexWrap: 'flex flex-wrap',
  flexItemStart: 'flex items-start',
  
  // Grid 관련
  gridCenter: 'grid place-items-center',
  gridCols2: 'grid grid-cols-2',
  gridCols3: 'grid grid-cols-3',
  gridCols4: 'grid grid-cols-4',
  
  // Position 관련
  absoluteCenter: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  fixedCenter: 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  
  // Spacing 관련
  paddingStandard: 'px-4 py-2',
  paddingLarge: 'px-6 py-3',
  marginStandard: 'mx-4 my-2',
  
  // Border 관련
  borderStandard: 'border border-gray-300 rounded-lg',
  borderPrimary: 'border border-primaryblue rounded-lg',
  
  // Shadow 관련
  shadowStandard: 'shadow-md',
  shadowHover: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
  
  // Text 관련
  textGradient: 'bg-gradient-to-r from-primaryblue to-primarygreen bg-clip-text text-transparent',
  textCenter: 'text-center',
  textBold: 'font-bold',
  
  // Button 관련
  buttonPrimary: 'bg-primaryblue text-white px-4 py-2 rounded-lg hover:bg-primaryblue-light transition-colors duration-200',
  buttonSecondary: 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200',
  
  // Input 관련
  inputField: 'border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primaryblue focus:border-transparent',
  
  // Responsive 관련
  responsiveGrid: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6',
  responsiveGap: 'gap-4 sm:gap-6 md:gap-8',
} as const;

// 클래스들을 조합하는 유틸리티 함수
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// 조건부 클래스 적용
export const conditionalClass = (condition: boolean, trueClass: string, falseClass: string = ''): string => {
  return condition ? trueClass : falseClass;
};

// 사용 예시:
// className={twClasses.flexColBetween}
// className={combineClasses(twClasses.flexCenter, twClasses.paddingStandard)}
// className={conditionalClass(isActive, twClasses.buttonPrimary, twClasses.buttonSecondary)} 