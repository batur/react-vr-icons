import * as React from 'react';
import { SVGProps, memo } from 'react';
const ElementPresentation2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path stroke={color} strokeWidth={strokeWidth} d='M1 10a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V10Z' />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M15.75 12a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2h-12.5a2 2 0 0 1-2-2V12ZM14.5 43a.5.5 0 0 1 0-1M14.5 43a.5.5 0 0 0 0-1'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M18.5 42.5h14' />
  </svg>
);
const Memo = memo(ElementPresentation2);
export default Memo;
