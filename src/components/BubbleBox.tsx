import React from 'react';

export interface BubbleBoxProps {
  layout?: 'horizontal' | 'vertical'; // 가로/세로 전체
  tailDirection?: 'top' | 'bottom' | 'left' | 'right'; // 꼬리 방향
  tailPosition?: number; // 꼬리 위치(0~100, %)
  color?: string; // 배경색
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center'; // 부모 내 위치
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * BubbleBox 컴포넌트
 * @param {('top'|'bottom'|'left'|'right')} direction 꼬리 방향
 * @param {string} color 말풍선 배경색
 * @param {number} tailPosition 꼬리 위치(0~100, %)
 * @param {React.ReactNode} children 내용
 */
const BubbleBox: React.FC<BubbleBoxProps> = ({
  layout = 'horizontal',
  tailDirection = 'bottom',
  tailPosition = 50,
  color = '#fff',
  position = 'center',
  children,
  style = {},
  ...props
}) => {
  // 꼬리 크기
  const tailSize = 50;

  // 꼬리 스타일 계산
  const tailStyles: Record<string, React.CSSProperties> = {
    top: {
      left: `${tailPosition}%`,
      top: -tailSize + 2,
      transform: 'translateX(-50%)',
      borderLeft: `${tailSize/1}px solid transparent`,
      borderRight: `${tailSize/1}px solid transparent`,
      borderBottom: `${tailSize}px solid ${color}`,
      borderTop: 'none',
      // backgroundColor: `${color}`,
    },
    bottom: {
      left: `${tailPosition}%`,
      bottom: -tailSize + 2,
      transform: 'translateX(-50%)',
      borderLeft: `${tailSize/1}px solid transparent`,
      borderRight: `${tailSize/1}px solid transparent`,
      borderTop: `${tailSize}px solid ${color}`,
      borderBottom: 'none',
    },
    left: {
      top: `${tailPosition}%`,
      left: -tailSize + 2,
      transform: 'translateY(-50%)',
      borderTop: `${tailSize/1}px solid transparent`,
      borderBottom: `${tailSize/1}px solid transparent`,
      borderRight: `${tailSize}px solid ${color}`,
      borderLeft: 'none',
    },
    right: {
      top: `${tailPosition}%`,
      right: -tailSize + 2,
      transform: 'translateY(-50%)',
      borderTop: `${tailSize/1}px solid transparent`,
      borderBottom: `${tailSize/1}px solid transparent`,
      borderLeft: `${tailSize}px solid ${color}`,
      borderRight: 'none',
    },
  };

  // 레이아웃별 스타일
  const layoutStyles: Record<string, React.CSSProperties> = {
    horizontal: {
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 48px',
    },
    vertical: {
      width: 'auto',
      height: '100%',
      minWidth: 120,
      borderRadius: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 0',
    },
  };

  // 꼬리 방향에 따라 컨테이너 패딩 조정
  const tailPadding: Record<string, React.CSSProperties> = {
    top: { paddingTop: tailSize },
    bottom: { paddingBottom: tailSize },
    left: { paddingLeft: tailSize },
    right: { paddingRight: tailSize },
  };

  // position prop에 따른 정렬 스타일
  const positionStyles: Record<string, React.CSSProperties> = {
    left:   { alignSelf: 'flex-start', justifySelf: 'flex-start', marginLeft: 0, marginRight: 'auto' },
    right:  { alignSelf: 'flex-end',   justifySelf: 'flex-end',   marginLeft: 'auto', marginRight: 0 },
    top:    { alignSelf: 'flex-start', justifySelf: 'flex-start', marginTop: 0, marginBottom: 'auto' },
    bottom: { alignSelf: 'flex-end',   justifySelf: 'flex-end',   marginTop: 'auto', marginBottom: 0 },
    center: { alignSelf: 'center',     justifySelf: 'center',     margin: '0 auto' },
  };

  return (
    <div
      style={{
        position: 'relative',
        background: color,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        ...layoutStyles[layout],
        ...tailPadding[tailDirection],
        ...positionStyles[position],
        ...style,
      }}
      {...props}
    >
      {/* 꼬리 */}
      <div
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          ...tailStyles[tailDirection],
        }}
      />
      {/* 내용 */}
      <div style={{ width: '100%', textAlign: 'center', fontSize: 32, fontWeight: 700, color: '#222', letterSpacing: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default BubbleBox;


