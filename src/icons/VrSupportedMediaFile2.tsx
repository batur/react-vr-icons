import * as React from 'react';
import { SVGProps, memo } from 'react';
const VrSupportedMediaFile2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M8.62 37.435H4.445a2.424 2.424 0 0 1-2.424-2.424V3.498a2.424 2.424 0 0 1 2.424-2.424h17.177c.642 0 1.258.255 1.713.71l9.49 9.489c.453.454.709 1.07.709 1.713v10.471'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M13.126 37.445a8.787 8.787 0 0 1 8.01-8.753l3.99-.354a50.005 50.005 0 0 1 8.853 0l3.987.354a8.792 8.792 0 0 1 8.013 8.757v.95a7.518 7.518 0 0 1-5.374 7.206 8.353 8.353 0 0 1-7.912-1.745l-1.813-1.602a2 2 0 0 0-2.652.004l-1.773 1.575a8.37 8.37 0 0 1-7.937 1.767 7.533 7.533 0 0 1-5.392-7.222v-.937Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m37.318 32.461-2.45-.218a60.015 60.015 0 0 0-10.627 0l-2.454.218'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M13.95 24.852a1.189 1.189 0 0 1-1.268-.064 1.405 1.405 0 0 1-.454-.531 1.6 1.6 0 0 1-.244-.712v-9.873a1.6 1.6 0 0 1 .245-.712c.108-.217.264-.4.453-.531s.405-.206.627-.217c.222-.011.443.041.642.152l8.819 4.94c.224.12.399.307.526.537.127.23.195.496.195.767s-.068.537-.195.768a1.37 1.37 0 0 1-.526.538l-8.82 4.938Z'
    />
  </svg>
);
const Memo = memo(VrSupportedMediaFile2);
export default Memo;
