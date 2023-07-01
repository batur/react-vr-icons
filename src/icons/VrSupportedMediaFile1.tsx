import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrSupportedMediaFile1 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M8.682 37.774H4.467a2.447 2.447 0 0 1-2.446-2.446V3.52a2.447 2.447 0 0 1 2.446-2.447h17.338c.648 0 1.27.258 1.729.716l9.578 9.578c.458.459.716 1.08.716 1.729v10.982'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M33.551 12.772h-9.137a2.285 2.285 0 0 1-2.284-2.284V1.35'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M13.126 37.445a8.787 8.787 0 0 1 8.01-8.753l3.99-.354a50.005 50.005 0 0 1 8.853 0l3.987.354a8.792 8.792 0 0 1 8.013 8.757v.95a7.518 7.518 0 0 1-5.374 7.206 8.353 8.353 0 0 1-7.912-1.745l-1.813-1.602a2 2 0 0 0-2.652.004l-1.773 1.575a8.37 8.37 0 0 1-7.937 1.767 7.533 7.533 0 0 1-5.392-7.222v-.937Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m37.318 32.461-2.45-.218a60.015 60.015 0 0 0-10.627 0l-2.454.218'
    />
  </svg>
);
const Memo = memo(SvgVrSupportedMediaFile1);
export default Memo;
