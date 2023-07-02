import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSpatialAudioHeadphone360 = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M31.864 16.558v-5.223A7.887 7.887 0 0 0 24 3.471a7.887 7.887 0 0 0-7.864 7.864v5.223'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M16.136 20.31a1.475 1.475 0 0 1-1.475 1.475v0a4.424 4.424 0 1 1 0-8.847v0a1.474 1.474 0 0 1 1.475 1.475v5.898ZM31.864 20.31a1.475 1.475 0 0 0 1.475 1.475v0a4.424 4.424 0 0 0 4.424-4.423v0a4.424 4.424 0 0 0-4.424-4.424v0a1.475 1.475 0 0 0-1.475 1.475v5.898ZM32.129 39.315c3.88-.77 7.198-2.075 9.532-3.75 2.334-1.674 3.58-3.642 3.58-5.656 0-2.028-1.263-3.994-3.58-5.656M24 40.09c-1.385 0-2.773-.065-4.144-.196-4.12-.392-7.905-1.362-10.876-2.786-2.97-1.424-4.993-3.238-5.813-5.213-.82-1.974-.399-4.021 1.209-5.882a11.248 11.248 0 0 1 1.963-1.76'
    />
    <path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} d='m21.78 35.65 4.44 4.44-4.44 4.439' />
  </svg>
);
const Memo = memo(SvgSpatialAudioHeadphone360);
export default Memo;
