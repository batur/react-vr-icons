import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgHapticSensorVibrationController2 = (
  props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 },
) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeWidth={props.strokeWidth} clipPath='url(#haptic-sensor-vibration-controller-2_svg__a)'>
      <path
        strokeLinecap='round'
        d='M24.808 5.386c-8.405 0-10.507 7.005-10.507 10.507 0 7.004 3.036 11.44 10.507 10.507 9.34-1.168 15.176-5.837 15.176-10.507S35.314 5.386 24.808 5.386Z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M14.3 15.893v24.515c0 1.946 1.168 5.837 5.838 5.837s5.837-3.89 5.837-5.837v-7.004c2.548-3.397 7.701-8.303 11.26-12.037'
      />
      <path strokeLinecap='round' d='M25.975 39.241h3.837a2 2 0 0 0 2-2v-3.004a2 2 0 0 0-2-2h-2.914' />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.598 1.5 9.5 2.598l1.098 4.098L6.5 7.794l1.098 4.098L3.5 12.99l1.098 4.098'
      />
      <path d='M27.992 12.527a1.5 1.5 0 1 1 2.99-.24' />
      <path d='M27.992 12.527a1.5 1.5 0 0 0 2.99-.24M21.956 18.584a1.5 1.5 0 1 1 2.99-.242' />
      <path d='M21.956 18.584a1.5 1.5 0 1 0 2.99-.242' />
    </g>
    <defs>
      <clipPath id='haptic-sensor-vibration-controller-2_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgHapticSensorVibrationController2);
export default Memo;
