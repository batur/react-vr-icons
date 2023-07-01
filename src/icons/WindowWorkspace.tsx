import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgWindowWorkspace = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M24 30.616a6.616 6.616 0 1 0 0-13.232 6.616 6.616 0 0 0 0 13.232Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M14.827 18.247V4.36A35.336 35.336 0 0 1 24 3.143c3.125 0 6.245.425 9.173 1.217v13.887m6.236-11.48c3.073 1.6 5.65 3.68 7.389 6.138V31.61c-1.74-2.457-4.316-4.538-7.39-6.138V6.767ZM1.202 12.905c1.74-2.458 4.316-4.538 7.39-6.138v18.705c-3.074 1.6-5.65 3.68-7.39 6.138V12.905ZM35.76 44.857a11.867 11.867 0 0 0-23.522 0'
    />
  </svg>
);
const Memo = memo(SvgWindowWorkspace);
export default Memo;