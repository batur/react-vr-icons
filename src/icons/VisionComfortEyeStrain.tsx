import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVisionComfortEyeStrain = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M23.997 10.27c-8.2-.136-16.682 5.593-22.014 11.462a3.383 3.383 0 0 0 0 4.528c5.214 5.745 13.673 11.609 22.014 11.47 8.34.139 16.8-5.724 22.02-11.47a3.383 3.383 0 0 0 0-4.528c-5.338-5.87-13.82-11.598-22.02-11.462Z'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M15.392 24a8.641 8.641 0 0 0 8.641 8.641V15.358A8.641 8.641 0 0 0 15.392 24Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M24.033 24.002h1.524M28.059 21.593h1.023M31.084 24.002h1.524M24.033 19.177h1.524M28.059 17.177h1.023M31.084 19.177h.362M24.033 28.819h1.524M28.059 26.41h1.023M28.059 30.762h1.023M31.084 28.819h.362M24.033 15.36h1.524M24.033 32.635h1.524'
    />
  </svg>
);
const Memo = memo(SvgVisionComfortEyeStrain);
export default Memo;
