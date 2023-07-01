import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgCastToDevicesPhone = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M10.748 39.266v.756a6.077 6.077 0 0 0 4.35 5.826 6.752 6.752 0 0 0 6.404-1.426l1.216-1.08a1.936 1.936 0 0 1 2.567-.004l1.249 1.103a6.738 6.738 0 0 0 6.383 1.408 6.065 6.065 0 0 0 4.334-5.813v-.766a7.092 7.092 0 0 0-6.464-7.065l-2.142-.19c-3.36-.175-3.312-.166-4.585-.166h-.12c-1.274 0-1.225-.009-4.585.166l-2.142.19a7.092 7.092 0 0 0-6.465 7.065'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m30.265 37.031-1.977-.176a48.427 48.427 0 0 0-4.19-.19 48.43 48.43 0 0 0-4.19.19l-1.977.176M27.077 24.871a4.212 4.212 0 0 0-5.957 0M31.048 20.9c-3.838-3.838-10.061-3.838-13.9 0'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M36 25.871h3a4 4 0 0 0 4-4v-16a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h3.53M36 10.871v6'
    />
  </svg>
);
const Memo = memo(SvgCastToDevicesPhone);
export default Memo;
