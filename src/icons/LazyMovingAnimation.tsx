import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgLazyMovingAnimation = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1 13a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v21a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V13Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M38 38a4 4 0 0 0 4-4V13a4 4 0 0 0-4-4M43 38a4 4 0 0 0 4-4V13a4 4 0 0 0-4-4'
    />
    <path stroke={props.color} strokeWidth={props.strokeWidth} d='M10.5 42a.5.5 0 0 1 0-1M10.5 42a.5.5 0 0 0 0-1' />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M14.5 41.5h14' />
  </svg>
);
const Memo = memo(SvgLazyMovingAnimation);
export default Memo;
