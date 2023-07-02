import * as React from 'react';
import { SVGProps, memo } from 'react';
const MovingTowardUserObject = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m37.843 9.941 7.275-7.275M37.565 37.781l7.553 7.553M10.354 10.139 2.882 2.667M10.395 37.822l-7.513 7.512M9.42 2.666H2.884v6.538M2.883 38.796v6.538H9.42M38.58 45.334h6.538v-6.538M45.118 9.204V2.666H38.58M25.17 35.704a1 1 0 0 1-.607.466l-5.478 1.467a1 1 0 0 1-.759-.1l-5.65-3.262a1 1 0 0 1-.466-.607l-1.468-5.477a1 1 0 0 1 .1-.76l3.262-5.65a1 1 0 0 1 .608-.465l5.477-1.468a1 1 0 0 1 .759.1l5.65 3.262a1 1 0 0 1 .466.607l1.468 5.478a1 1 0 0 1-.1.758l-3.262 5.65ZM30.773 21.78a1 1 0 0 1-.707-.294l-2.091-2.091a1 1 0 0 1-.293-.707v-3.455a1 1 0 0 1 .293-.707l2.09-2.091a1 1 0 0 1 .708-.293h3.455a1 1 0 0 1 .707.293l2.091 2.09a1 1 0 0 1 .293.708v3.455a1 1 0 0 1-.293.707l-2.09 2.091a1 1 0 0 1-.708.293h-3.455Z'
    />
  </svg>
);
const Memo = memo(MovingTowardUserObject);
export default Memo;
