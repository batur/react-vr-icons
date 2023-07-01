import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgDeviceCalibrationAppleVisionPro = (
  props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 },
) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M45.207 23.726a10.297 10.297 0 0 0 1.293-5.002v-1.283c0-6.234-4.76-11.437-10.97-11.989l-3.643-.323a89.073 89.073 0 0 0-15.774 0l-3.637.323A12.042 12.042 0 0 0 1.5 17.447v1.301c0 4.556 2.994 8.57 7.36 9.87a11.442 11.442 0 0 0 10.838-2.39l2.12-1.873a3.281 3.281 0 0 1 2.41-.815'
    />
    <circle cx={35.5} cy={32.572} r={7.333} stroke={props.color} strokeWidth={props.strokeWidth} transform='rotate(180 35.5 32.572)' />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M35.5 43.572v-22M24.5 32.572h22'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m34.636 11.133-3.356-.298a82.198 82.198 0 0 0-14.555 0l-3.362.298'
    />
  </svg>
);
const Memo = memo(SvgDeviceCalibrationAppleVisionPro);
export default Memo;
