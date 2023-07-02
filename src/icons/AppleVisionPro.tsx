import * as React from 'react';
import { SVGProps, memo } from 'react';
const AppleVisionPro = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <circle cx={11.724} cy={22.5} r={1.744} stroke={color} strokeWidth={strokeWidth} />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.324}
      d='M18.875 19.37 2.715 12.5C2.142 13.333 1 18.1 1 22.5s1.143 9.247 1.714 10l15.803-6.869'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.324}
      d='M5.625 13.727c-.54 1.634-1.17 4.607-1.17 8.752 0 4.148.63 7.122 1.17 8.755M8.484 14.991c-.426 1.728-.81 4.25-.81 7.488 0 3.247.386 5.774.813 7.502'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M35.71 22.5c0-7.056 4.233-9.409 7.056-9.409C45.59 13.091 47 14.503 47 22.5c0 7.997-1.411 9.409-4.234 9.409-2.822 0-7.056-2.352-7.056-9.409Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.324}
      d='M27.417 19.32c.762-2.755 2.432-4.549 3.84-5.522.777-.538 1.772-.542 2.67-.243l4.382 1.46M28.405 28.062a9.674 9.674 0 0 0 2.852 3.14c.778.538 1.772.542 2.67.243l4.382-1.46'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.324}
      d='M36.041 19.364H18.892a3.136 3.136 0 0 0-3.136 3.136v0a3.136 3.136 0 0 0 3.136 3.136h1.882c0 .837.502 2.51 2.509 2.51h4.39c1.046 0 3.137-.628 3.137-3.137h5.108M40.046 19.886c.027-1.017.754-3.066 3.45-3.13'
    />
  </svg>
);
const Memo = memo(AppleVisionPro);
export default Memo;
