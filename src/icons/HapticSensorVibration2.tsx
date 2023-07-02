import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgHapticSensorVibration2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M18.544 4.598 14.446 3.5l-1.098 4.098L9.25 6.5l-1.098 4.098L4.054 9.5l-1.098 4.098M29.456 4.598 33.554 3.5l1.098 4.098L38.75 6.5l1.098 4.098L43.946 9.5l1.098 4.098'
    />
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M1.456 30.991c0-6.234 4.76-11.437 10.97-11.989l3.643-.324a89.078 89.078 0 0 1 15.773 0l3.638.324a12.042 12.042 0 0 1 10.976 11.995v1.301c0 4.556-2.994 8.57-7.36 9.87a11.442 11.442 0 0 1-10.838-2.39l-2.12-1.873a3.287 3.287 0 0 0-4.359.006l-2.065 1.835a11.464 11.464 0 0 1-10.872 2.42 10.318 10.318 0 0 1-7.386-9.892V30.99Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m34.73 24.673-3.357-.299a82.197 82.197 0 0 0-14.556 0l-3.361.3'
    />
  </svg>
);
const Memo = memo(SvgHapticSensorVibration2);
export default Memo;
