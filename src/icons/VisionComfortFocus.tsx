import * as React from 'react';
import { SVGProps, memo } from 'react';
const VisionComfortFocus = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M31.287 17.95a7.341 7.341 0 0 1-14.681 0V12.59a1.223 1.223 0 0 1 1.761-1.101l5.58 2.79 5.578-2.79a1.224 1.224 0 0 1 1.762 1.101v5.359ZM23.946 25.29v9.788M13.304 26.378c5.632 1.754 7.793 3.852 10.643 8.7h-2.945c-7.682 0-8.333-5.8-7.698-8.7Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M34.59 26.378c-5.632 1.754-7.794 3.852-10.644 8.7h2.945c7.682 0 8.333-5.8 7.699-8.7ZM45.118 2.666 37.844 9.94M45.118 45.334l-7.552-7.553M2.882 2.666l7.472 7.472M2.882 45.334l7.513-7.512M3.815 10.139h6.538V3.6M10.394 44.36v-6.538H3.856M44.103 37.781h-6.538v6.538M37.843 3.403v6.538h6.538'
    />
  </svg>
);
const Memo = memo(VisionComfortFocus);
export default Memo;
