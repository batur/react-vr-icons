import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsPasscodeLock = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d='M29.372 21.807v-3.152a5.442 5.442 0 0 0-5.444-5.444 5.442 5.442 0 0 0-5.444 5.444v3.152'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
      d='M31.521 32.552c0 1.146-1.003 2.149-2.149 2.149H18.627c-1.146 0-2.149-1.003-2.149-2.15v-8.595c0-1.146 1.003-2.15 2.15-2.15h10.744c1.146 0 2.15 1.004 2.15 2.15'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 29.94a1.686 1.686 0 1 0 0-3.373 1.686 1.686 0 0 0 0 3.373Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsPasscodeLock);
export default Memo;
