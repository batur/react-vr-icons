import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementOrnament1 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M47.09 32.75a4 4 0 0 1-4 4'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M8.59 36.75h3.154M39.405 36.75H36.25M47.09 11.75v3M1.09 11.75v3M47.09 18.75v3M1.09 18.75v3M47.09 25.75v3M1.09 25.75v3'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M11.75 36.75a3.5 3.5 0 0 1 3.5-3.5h17.5a3.5 3.5 0 1 1 0 7h-17.5a3.5 3.5 0 0 1-3.5-3.5ZM14.59 44.25a.5.5 0 1 1 0-1M14.59 44.25a.5.5 0 0 0 0-1'
    />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M18.59 43.75h14' />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M5.09 36.75a4 4 0 0 1-4-4M5.09 3.75a4 4 0 0 0-4 4M43.09 3.75a4 4 0 0 1 4 4'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M8.59 3.75h3.154M39.405 3.75H36.25M15.59 3.75h3.154M29.435 3.75h3.155M22.59 3.75h3.154'
    />
  </svg>
);
const Memo = memo(SvgElementOrnament1);
export default Memo;