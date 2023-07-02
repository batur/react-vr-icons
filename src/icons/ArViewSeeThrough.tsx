import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgArViewSeeThrough = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M1.5 33.535c0-6.235 4.76-11.437 10.97-11.99l3.643-.323a89.078 89.078 0 0 1 15.774 0l3.637.323A12.042 12.042 0 0 1 46.5 33.54v1.302c0 4.556-2.994 8.57-7.36 9.87a11.441 11.441 0 0 1-10.838-2.391l-2.12-1.873a3.287 3.287 0 0 0-4.359.007l-2.065 1.834A11.464 11.464 0 0 1 8.886 44.71 10.318 10.318 0 0 1 1.5 34.818v-1.283Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M10.928 21.698V11.324L24 4.444l13.072 6.88v10.374'
    />
    <path stroke={color} strokeLinejoin='round' strokeWidth={strokeWidth} d='m10.915 11.56 13.13 7.113L37.11 11.56' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M23.983 34.716v-3.312M23.983 27.146v-1.493M33.632 29.647l3.44-1.81v-1.26M20.56 32.906l3.44 1.81 3.44-1.81M14.368 29.647l-3.44-1.81v-1.26'
    />
  </svg>
);
const Memo = memo(SvgArViewSeeThrough);
export default Memo;
