import * as React from 'react';
import { SVGProps, memo } from 'react';
const MetaQuest2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M3 29c0-7.18 5.82-13 13-13h24c7.18 0 13 5.82 13 13s-5.82 13-13 13H24C8.82 42 3 36.18 3 29Z'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M24 32v3.986M24 32v3.986M32 32v3.986' />
    <path stroke={color} strokeWidth={strokeWidth} d='M20 10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6h-8v-6Z' />
  </svg>
);
const Memo = memo(MetaQuest2);
export default Memo;
