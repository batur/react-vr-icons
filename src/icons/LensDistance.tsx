import * as React from 'react';
import { SVGProps, memo } from 'react';
const LensDistance = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M13.234 26.885h-2.856a8.87 8.87 0 1 1 0-17.74h2.742a8.344 8.344 0 0 1 8.345 8.345c0 .724-.236 1.43-.672 2.008l-4.364 5.794a4 4 0 0 1-3.195 1.593ZM34.774 26.885h2.856a8.87 8.87 0 1 0 0-17.74h-2.743a8.345 8.345 0 0 0-8.345 8.345c0 .724.236 1.43.672 2.008l4.365 5.794a4 4 0 0 0 3.195 1.593Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M33.864 36H14.136M18.689 31.447 14.136 36l4.553 4.553M29.311 31.447 33.864 36l-4.552 4.553'
    />
  </svg>
);
const Memo = memo(LensDistance);
export default Memo;
