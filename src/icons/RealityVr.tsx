import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgRealityVr = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <ellipse
      cx={11.809}
      cy={4.724}
      stroke={color}
      strokeWidth={strokeWidth}
      rx={11.809}
      ry={4.724}
      transform='matrix(-1 0 0 1 39.618 2.905)'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M39.618 30.29V7.628M24 7.629v24.31' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m6.958 38.763 9.9 4.576a6.857 6.857 0 0 0 4.652.399l21.336-5.717a2.857 2.857 0 0 0 2.02-3.5 5.714 5.714 0 0 0-6.998-4.04l-14.834 3.974-6.586-3.09 6.422-1.72a3.637 3.637 0 0 0-1.883-7.026L6.224 26.575'
    />
  </svg>
);
const Memo = memo(SvgRealityVr);
export default Memo;
