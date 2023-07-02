import * as React from 'react';
import { SVGProps, memo } from 'react';
const HandGestureControlSlide = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M45.783 45.644v-4.992a7.117 7.117 0 0 0-5.947-7.02l-4.728-.79V22.248a3.558 3.558 0 0 0-7.117 0V38.18l-2.785-1.397a3.885 3.885 0 0 0-4.246 6.51l2.88 2.35M2.904 8.905h24.49M35.553 8.904a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z'
    />
  </svg>
);
const Memo = memo(HandGestureControlSlide);
export default Memo;
