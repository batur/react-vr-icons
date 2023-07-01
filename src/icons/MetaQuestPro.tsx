import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgMetaQuestPro = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1.5 30.005a9.841 9.841 0 0 1 8.97-9.802l5.643-.502a89.078 89.078 0 0 1 15.774 0l5.637.501a9.848 9.848 0 0 1 3.658 18.553l-2.826 1.464c-4.182 2.167-9.327.905-12.043-2.942-1.125-1.594-3.492-1.594-4.611.004a9.389 9.389 0 0 1-11.997 2.955L6.826 38.75A9.841 9.841 0 0 1 1.5 30.005Z'
    />
    <circle cx={16.074} cy={32.283} r={2.988} stroke={props.color} strokeWidth={props.strokeWidth} />
    <circle cx={31.926} cy={32.283} r={2.988} stroke={props.color} strokeWidth={props.strokeWidth} />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M6 21.743c3-9 11-13 18-13s15 4 18 13' />
    <path stroke={props.color} strokeWidth={props.strokeWidth} d='M24 29.269a.5.5 0 1 1 0-1M24 29.269a.5.5 0 1 0 0-1' />
  </svg>
);
const Memo = memo(SvgMetaQuestPro);
export default Memo;
