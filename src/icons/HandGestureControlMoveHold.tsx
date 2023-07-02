import * as React from 'react';
import { SVGProps, memo } from 'react';
const HandGestureControlMoveHold = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m30.724 22.324 2.21-1.244V7.427L22.063 1.704 11.189 7.427V21.24l2.21 1.244'
    />
    <path stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} d='m11.179 7.623 10.92 5.917 10.868-5.917' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M36.214 45.567v-4.99a7.118 7.118 0 0 0-5.948-7.02l-4.728-.79V22.09a3.559 3.559 0 0 0-7.117 0v24.013l-2.785-1.397a3.887 3.887 0 0 0-4.245 6.51l2.88 2.35'
    />
  </svg>
);
const Memo = memo(HandGestureControlMoveHold);
export default Memo;
