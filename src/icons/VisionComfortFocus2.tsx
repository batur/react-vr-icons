import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVisionComfortFocus2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#vision-comfort-focus-2_svg__a)'>
      <path d='M31.287 17.95a7.34 7.34 0 0 1-14.681 0V12.59a1.223 1.223 0 0 1 1.761-1.101l5.58 2.79 5.578-2.79a1.223 1.223 0 0 1 1.762 1.101v5.359ZM23.946 25.29v9.788M13.304 26.378c5.632 1.754 7.793 3.852 10.643 8.7h-2.945c-7.682 0-8.333-5.8-7.698-8.7Z' />
      <path d='M34.59 26.378c-5.632 1.754-7.794 3.852-10.644 8.7h2.945c7.682 0 8.333-5.8 7.698-8.7ZM15.5 1.5h-14v14M15.5 46.5h-14v-14M32.5 1.5h14v14M32.5 46.5h14v-14' />
    </g>
    <defs>
      <clipPath id='vision-comfort-focus-2_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVisionComfortFocus2);
export default Memo;
