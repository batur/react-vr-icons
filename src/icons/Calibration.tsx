import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgCalibration = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <circle cx={24} cy={24} r={18} stroke={color} strokeWidth={strokeWidth} />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 2v3.992M24 46v-4M24 18.138v11.724M46 24h-3.992M2 24h3.992M29.862 24H18.138'
    />
  </svg>
);
const Memo = memo(SvgCalibration);
export default Memo;
