import * as React from 'react';
import { SVGProps, memo } from 'react';
const HeadLockContentWindow = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M8.5 14.5a4 4 0 0 1 4-4h23a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4h-23a4 4 0 0 1-4-4v-15ZM15.5 37.5a.5.5 0 0 1 0-1M15.5 37.5a.5.5 0 0 0 0-1'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M19.5 37h14' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M44.539 19.311 47.228 22l-2.69 2.689M3.461 19.311.772 22l2.69 2.689M47.215 22H43M.781 22H5M23.999 15.941c-3.66-.06-7.443 2.496-9.822 5.114a1.509 1.509 0 0 0 0 2.02c2.326 2.564 6.1 5.18 9.822 5.118 3.721.062 7.495-2.554 9.824-5.117a1.51 1.51 0 0 0 0-2.02c-2.382-2.62-6.246-5.175-9.824-5.115Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M26.855 22.068a2.857 2.857 0 1 1-5.713 0 2.857 2.857 0 0 1 5.713 0Z'
    />
  </svg>
);
const Memo = memo(HeadLockContentWindow);
export default Memo;
