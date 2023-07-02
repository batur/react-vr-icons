import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgCastToDevicesTv = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M36.725 27.86H40a4 4 0 0 0 4-4v-18a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h3.524M39 27.86l2 4M9.196 27.86l-2 4'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M10.748 39.277v.756a6.077 6.077 0 0 0 4.35 5.826 6.752 6.752 0 0 0 6.404-1.426l1.224-1.08a1.936 1.936 0 0 1 2.567-.004l1.249 1.103a6.738 6.738 0 0 0 6.383 1.407 6.065 6.065 0 0 0 4.334-5.812v-.767a7.092 7.092 0 0 0-6.464-7.064l-2.142-.19c-3.36-.175-3.312-.246-4.585-.246h-.12c-1.274 0-1.225-.009-4.585.246l-2.142.19a7.092 7.092 0 0 0-6.465 7.065'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m30.265 37.042-1.977-.176a48.387 48.387 0 0 0-4.19-.19 48.39 48.39 0 0 0-4.19.19l-1.977.176M27.077 24.882a4.212 4.212 0 0 0-5.957 0M31.048 20.91c-3.838-3.837-10.061-3.837-13.9 0'
    />
  </svg>
);
const Memo = memo(SvgCastToDevicesTv);
export default Memo;
