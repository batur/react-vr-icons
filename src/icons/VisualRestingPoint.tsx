import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVisualRestingPoint = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1.09 10a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4h-38a4 4 0 0 1-4-4V10ZM14.59 43a.5.5 0 1 1 0-1M14.59 43a.5.5 0 0 0 0-1'
    />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M18.59 42.5h14' />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M14.005 19.267c1.828 3.397 5.617 5.731 9.995 5.731 4.379 0 8.168-2.334 9.996-5.731M16.015 21.877l-4.225 3.54M21.025 24.623l-2.034 5.124M31.985 21.877l4.225 3.54M26.969 24.623l2.034 5.124'
    />
  </svg>
);
const Memo = memo(SvgVisualRestingPoint);
export default Memo;
