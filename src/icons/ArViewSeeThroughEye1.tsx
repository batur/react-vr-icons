import * as React from 'react';
import { SVGProps, memo } from 'react';
const ArViewSeeThroughEye1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M23.998 2.436c-5.933-.098-12.068 4.046-15.925 8.292a2.448 2.448 0 0 0 0 3.276c3.771 4.156 9.89 8.397 15.925 8.297 6.034.1 12.153-4.141 15.93-8.297a2.448 2.448 0 0 0 0-3.276c-3.862-4.246-9.998-8.39-15.93-8.292Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M28.63 12.37a4.631 4.631 0 1 1-9.263 0 4.631 4.631 0 0 1 9.263 0ZM32.127 40.395c3.881-.771 7.199-2.076 9.533-3.75 2.334-1.674 3.58-3.643 3.58-5.656 0-2.7-2.238-5.29-6.222-7.2m-15.02 17.38c-1.384 0-2.772-.064-4.143-.195-4.12-.393-7.906-1.363-10.876-2.786-2.97-1.424-4.994-3.238-5.814-5.213-.82-1.975-.398-4.022 1.21-5.882 1.072-1.242 2.64-2.363 4.604-3.303'
    />
    <path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='m21.78 36.73 4.438 4.44-4.439 4.438' />
  </svg>
);
const Memo = memo(ArViewSeeThroughEye1);
export default Memo;
