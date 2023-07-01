import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementPresentation2 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1 10a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V10Z'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M15.75 12a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2h-12.5a2 2 0 0 1-2-2V12ZM14.5 43a.5.5 0 0 1 0-1M14.5 43a.5.5 0 0 0 0-1'
    />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M18.5 42.5h14' />
  </svg>
);
const Memo = memo(SvgElementPresentation2);
export default Memo;
