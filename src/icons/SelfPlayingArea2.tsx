import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSelfPlayingArea2 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m2 43.296 7.468-12.912a2 2 0 0 1 1.732-1h25.6a2 2 0 0 1 1.732 1L46 43.296H2Z'
    />
    <path stroke={props.color} strokeLinecap='round' strokeWidth={props.strokeWidth} d='M6.418 35.65h35.16M24 29.383v13.914' />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M6.615 13.382v.99c0 3.531 2.322 6.641 5.707 7.645a8.858 8.858 0 0 0 8.4-1.871l1.596-1.418a2.54 2.54 0 0 1 3.368-.005l1.639 1.447a8.84 8.84 0 0 0 8.373 1.847 7.956 7.956 0 0 0 5.687-7.626v-1.005c0-4.82-3.68-8.842-8.48-9.268l-2.811-.25c-4.408-.23-4.344-.217-6.015-.217h-.157c-1.671 0-1.608-.012-6.015.217l-2.81.25a9.305 9.305 0 0 0-8.482 9.268'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m32.218 10.448-2.593-.23a63.536 63.536 0 0 0-5.497-.25 63.5 63.5 0 0 0-5.498.25l-2.593.23'
    />
  </svg>
);
const Memo = memo(SvgSelfPlayingArea2);
export default Memo;
