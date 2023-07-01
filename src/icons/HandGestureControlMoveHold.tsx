import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgHandGestureControlMoveHold = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m30.724 22.324 2.21-1.164V7.427L22.063 1.704 11.189 7.427V21.16l2.21 1.164'
    />
    <path stroke={props.color} strokeLinejoin='round' strokeWidth={props.strokeWidth} d='m11.179 7.623 10.92 5.917 10.868-5.917' />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M36.214 45.567v-4.99a7.118 7.118 0 0 0-5.948-7.02l-4.728-.79V22.09a3.559 3.559 0 0 0-7.117 0v16.013l-2.785-1.397a3.887 3.887 0 0 0-4.165 6.51l2.88 2.35'
    />
  </svg>
);
const Memo = memo(SvgHandGestureControlMoveHold);
export default Memo;
