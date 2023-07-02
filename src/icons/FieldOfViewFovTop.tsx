import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgFieldOfViewFovTop = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 47.193c6.904 0 12.5-4.32 12.5-11.5 1.2.4 1.833-.247 2-.5.5-1-.833-3-2-4.5 0-6.29-4.294-11.536-10-12.74 0 0-.5-2.26-2.5-2.26s-2.5 2.26-2.5 2.26c-5.706 1.204-10 6.45-10 12.74-1.247 1.5-2.5 3.5-2 4.5.247.333.8.9 2 .5 0 7.18 5.596 11.5 12.5 11.5Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m36.094 18.125 1.754-2.612M11.906 18.125l-1.754-2.612M40.185 12.03l1.754-2.612M7.815 12.03 6.06 9.418M44.277 5.936l1.753-2.612M3.723 5.936 1.97 3.324'
    />
  </svg>
);
const Memo = memo(SvgFieldOfViewFovTop);
export default Memo;
