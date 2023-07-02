import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementPresentation1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M15.827 10.75a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2h-12.5a2 2 0 0 1-2-2v-21ZM14.5 44a.5.5 0 0 1 0-1M14.5 44a.5.5 0 0 0 0-1'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M18.5 43.5h14' />
    <path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='M47 33.75a4 4 0 0 1-4 4' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M47 12.75v3M1 12.75v3M47 19.75v3M1 19.75v3M47 26.75v3M1 26.75v3'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M5 37.75a4 4 0 0 1-4-4M5 4.75a4 4 0 0 0-4 4M43 4.75a4 4 0 0 1 4 4'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M8.5 4.75h3.155M8.5 37.75h3.155M39.315 4.75h-3.154M39.315 37.75h-3.154M15.5 4.75h3.155M15.5 37.75h3.155M29.345 4.75H32.5M29.345 37.75H32.5M22.5 4.75h3.155M22.5 37.75h3.155'
    />
  </svg>
);
const Memo = memo(SvgElementPresentation1);
export default Memo;
