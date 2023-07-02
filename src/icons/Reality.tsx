import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgReality = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M44 7.937v23.625c0 2.54-4.51 4.66-10.503 5.146' />
    <ellipse cx={30.875} cy={7.937} stroke={color} strokeWidth={strokeWidth} rx={13.125} ry={5.25} />
    <path
      stroke={color}
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M27.163 38.901c.712 1.21 1.183 2.735.206 3.744C25.47 44.608 20.703 46 15.125 46c-5.578 0-10.344-1.392-12.244-3.355-.976-1.009-.506-2.533.206-3.744l12.038-20.464 12.038 20.464Z'
    />
    <path stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} d='M17.75 7.937V14' />
  </svg>
);
const Memo = memo(SvgReality);
export default Memo;
