import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgScreenSizeResolutionImmersive = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m7.38 33.631 33.24-19.262M39.201 19.15l1.421-4.793-4.794-1.42M8.478 28.765l-1.1 4.878 4.878 1.1'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M2 43V5c3.333 1.667 10.8 4 22 4s18.667-2.333 22-4v38c-3.333-1.667-10.8-4-22-4S5.333 41.333 2 43Z'
    />
  </svg>
);
const Memo = memo(SvgScreenSizeResolutionImmersive);
export default Memo;
