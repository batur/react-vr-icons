import * as React from 'react';
import { SVGProps, memo } from 'react';
const HapticSensorVibrationController = (props: SVGProps<SVGSVGElement> = { width: 24, height: 24, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeWidth={strokeWidth} clipPath='url(#haptic-sensor-vibration-controller_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M12.108 32.291c-5.523 0-10-4.477-10-10v-4.527h22.575L40.858 33.94a6.635 6.635 0 0 1-9.383 9.383l-11.032-11.03h-8.335Z'
      />
      <path
        strokeLinecap='round'
        d='M5.691 12.488h3.634M24.563 10.474h7.268M20.196 17.725v-7.25M15.978 32.296c.596 1.118 1.032 2.606.92 4.417-.083 1.363.867 2.714 2.233 2.714h8.43'
      />
      <path strokeLinecap='round' strokeLinejoin='round' d='m44.32 18.361.405-4.223-4.223-.405.405-4.224-4.223-.405.406-4.223-4.224-.406' />
    </g>
    <defs>
      <clipPath id='haptic-sensor-vibration-controller_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(HapticSensorVibrationController);
export default Memo;
