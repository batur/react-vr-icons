import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementOrnament2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M11.838 36.75H5.09a4 4 0 0 1-4-4v-25a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4h-6.75'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M11.84 36.75a3.5 3.5 0 0 1 3.5-3.5h17.5a3.5 3.5 0 1 1 0 7h-17.5a3.5 3.5 0 0 1-3.5-3.5ZM14.59 44.25a.5.5 0 1 1 0-1M14.59 44.25a.5.5 0 0 0 0-1'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M18.59 43.75h14' />
  </svg>
);
const Memo = memo(SvgElementOrnament2);
export default Memo;
