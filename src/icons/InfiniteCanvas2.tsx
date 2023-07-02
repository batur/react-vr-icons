import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgInfiniteCanvas2 = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} clipPath='url(#infinite-canvas-2_svg__a)'>
      <path d='M28.742 35.42a6.774 6.774 0 1 0 0-13.549 6.774 6.774 0 0 0 0 13.55Z' />
      <path d='m25.588 22.65-5.593-10.07-7.512 14.71h9.622M39.125 38.896l7.681 7.681M8.875 9.104 1.194 1.423M8.875 38.896l-7.681 7.681M39.125 9.104l7.681-7.681M46.807 33.809V14.192M13.422 46.577h21.405M1.193 33.809V14.192M13.422 1.423h21.405M40.982 46.577h5.824v-5.824M7.018 1.423H1.194v5.824M7.018 46.577H1.194v-5.824M40.982 1.423h5.824v5.824' />
    </g>
    <defs>
      <clipPath id='infinite-canvas-2_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgInfiniteCanvas2);
export default Memo;
