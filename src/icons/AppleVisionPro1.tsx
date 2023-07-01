import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgAppleVisionPro1 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1.5 24.514c0-6.235 4.76-11.437 10.97-11.99l3.643-.323a89.078 89.078 0 0 1 15.774 0l3.637.323A12.042 12.042 0 0 1 46.5 24.52v1.302c0 4.555-2.994 8.57-7.36 9.87A11.441 11.441 0 0 1 28.302 33.3l-2.12-1.873a3.287 3.287 0 0 0-4.359.007l-2.065 1.834A11.465 11.465 0 0 1 8.886 35.69 10.318 10.318 0 0 1 1.5 25.797v-1.283Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m34.636 18.195-3.356-.298a82.198 82.198 0 0 0-14.555 0l-3.362.299'
    />
  </svg>
);
const Memo = memo(SvgAppleVisionPro1);
export default Memo;
