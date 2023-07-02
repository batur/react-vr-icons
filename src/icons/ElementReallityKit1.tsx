import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementReallityKit1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path stroke={color} strokeWidth={strokeWidth} d='M14.59 44a.5.5 0 1 1 0-1M14.59 44a.5.5 0 0 0 0-1' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M18.59 43.5h14M18.34 20.057l-5.297 2.648a.821.821 0 0 0-.454.735v5.967c0 .31.176.595.454.734l4.929 2.465a.822.822 0 0 0 .735 0l5.015-2.508a.822.822 0 0 1 .735 0l5.015 2.508a.822.822 0 0 0 .735 0l4.928-2.465a.822.822 0 0 0 .454-.734V23.44a.822.822 0 0 0-.454-.735l-5.296-2.648m0 .01v-6.474a.822.822 0 0 0-.454-.735l-4.928-2.464a.822.822 0 0 0-.735 0l-4.929 2.464a.821.821 0 0 0-.454.735v6.475'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m18.34 20.057 5.75 2.875 5.75-2.875M12.73 23.003l5.61 2.804 5.75-2.875 5.75 2.875 5.609-2.805M29.697 13.156l-5.609 2.805-5.61-2.805M18.34 25.807v6.786M24.09 15.964v13.953M29.84 25.804v6.79'
    />
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
const Memo = memo(SvgElementReallityKit1);
export default Memo;
