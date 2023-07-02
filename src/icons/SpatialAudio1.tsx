import * as React from 'react';
import { SVGProps, memo } from 'react';
const SpatialAudio1 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M32.129 40.487c3.88-.77 7.198-2.076 9.532-3.75 2.334-1.674 3.58-3.642 3.58-5.656 0-2.028-1.263-3.994-3.58-5.656M24 41.262c-1.385 0-2.773-.065-4.144-.196-4.12-.393-7.905-1.362-10.876-2.786-2.97-1.424-4.993-3.238-5.813-5.213-.82-1.975-.399-4.022 1.209-5.882a11.248 11.248 0 0 1 1.963-1.76'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m21.78 36.823 4.44 4.439-4.44 4.439M24.46 4.795a1.836 1.836 0 0 0-1.922.174l-8.077 5.14h-3.67a1.835 1.835 0 0 0-1.836 1.835v3.671a1.835 1.835 0 0 0 1.835 1.836h3.671l8.077 5.14a1.836 1.836 0 0 0 2.937-1.47V6.438a1.836 1.836 0 0 0-1.014-1.642v0ZM31.191 17.508c.477-1.046.758-2.335.758-3.729 0-1.394-.281-2.683-.758-3.73M35.37 21.686c1.345-2.192 2.145-4.933 2.145-7.907s-.8-5.724-2.146-7.907'
    />
  </svg>
);
const Memo = memo(SpatialAudio1);
export default Memo;
