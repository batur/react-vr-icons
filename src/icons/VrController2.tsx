import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrController2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeWidth={strokeWidth} clipPath='url(#vr-controller-2_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M11.574 29.63c-5.523 0-10-4.478-10-10.001v-5.99h24.849l17.803 17.804A7.303 7.303 0 0 1 33.898 41.77L21.756 29.63H11.574Z'
      />
      <path
        strokeLinecap='round'
        d='M5.519 8.058h4M24 5.615h8M20 13.596V5.615M24.84 29.635c.687 1.287 1.18 3.02.994 5.14-.12 1.36.832 2.708 2.197 2.708h9.559'
      />
    </g>
    <defs>
      <clipPath id='vr-controller-2_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVrController2);
export default Memo;
