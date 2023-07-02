import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgFieldOfViewFovSide = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M5.535 42.228v-9.469A14.154 14.154 0 0 1 15.17 8.222c2.487 0 4.524.473 6.234 1.323 6.086 3.024 8.03 10.822 11.335 19.08h-4.534v4.535a4.534 4.534 0 0 1-4.534 4.534h-2.267v4.534'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M23.988 19.14a3.277 3.277 0 0 0-4.635 0' />
    <path stroke={color} strokeWidth={strokeWidth} d='M21.67 22.548a.484.484 0 0 1 0-.968M21.67 22.548a.484.484 0 1 0 0-.969' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m32 14.392 2.674-1.658M34.674 31.658 34 31.24M38.239 10.524l2.674-1.657M38.239 33.867l2.674 1.658M44.478 6.657 47.152 5M44.478 37.734l2.674 1.658'
    />
  </svg>
);
const Memo = memo(SvgFieldOfViewFovSide);
export default Memo;
