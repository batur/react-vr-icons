import * as React from 'react';
import { SVGProps, memo } from 'react';
const VirtualEvent = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M39.177 28.088a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M46.177 35.088a7 7 0 1 0-14 0v3h3l1 8h6l1-8h3v-3ZM11.287 12.965a2.877 2.877 0 1 0 0-5.754 2.877 2.877 0 0 0 0 5.754ZM11.287 28.965a2.877 2.877 0 1 0 0-5.754 2.877 2.877 0 0 0 0 5.754ZM31.035 12.965a2.877 2.877 0 1 0 0-5.754 2.877 2.877 0 0 0 0 5.754Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24.321 18a5.034 5.034 0 1 0-10.07 0M24.321 34a5.034 5.034 0 1 0-10.07 0M34.595 14.44A5.035 5.035 0 0 0 26 18'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M40 12V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h22' />
    <path stroke={color} strokeWidth={strokeWidth} d='M21 2v32' />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M2 18h28' />
  </svg>
);
const Memo = memo(VirtualEvent);
export default Memo;
