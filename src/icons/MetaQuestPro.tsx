import * as React from 'react';
import { SVGProps, memo } from 'react';
const MetaQuestPro = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M1.5 30.005a9.841 9.841 0 0 1 8.97-9.802l5.643-.502a89.078 89.078 0 0 1 15.774 0l5.637.501a9.848 9.848 0 0 1 3.658 18.553l-2.826 1.464c-4.182 2.247-9.327.905-12.043-2.942-1.125-1.594-3.492-1.594-4.611.004a9.389 9.389 0 0 1-11.997 2.955L6.826 38.75A9.841 9.841 0 0 1 1.5 30.005Z'
    />
    <circle cx={24.074} cy={32.283} r={2.988} stroke={color} strokeWidth={strokeWidth} />
    <circle cx={31.926} cy={32.283} r={2.988} stroke={color} strokeWidth={strokeWidth} />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M6 21.743c3-9 11-13 18-13s15 4 18 13' />
    <path stroke={color} strokeWidth={strokeWidth} d='M24 29.269a.5.5 0 1 1 0-1M24 29.269a.5.5 0 1 0 0-1' />
  </svg>
);
const Memo = memo(MetaQuestPro);
export default Memo;
