import * as React from 'react';
import { SVGProps, memo } from 'react';
const VoiceControl = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeLinecap='round' strokeWidth={strokeWidth} clipPath='url(#voice-control_svg__a)'>
      <path d='M44.757 21.502a10.464 10.464 0 0 0 2.138-6.343v-1.324A12.254 12.254 0 0 0 35.726 1.629l-3.701-.33a90.638 90.638 0 0 0-24.05 0l-3.707.33a12.248 12.248 0 0 0-11.243 12.2v1.305A10.5 10.5 0 0 0 8.62 25.201a11.666 11.666 0 0 0 11.063-2.464l2.102-1.867a3.345 3.345 0 0 1 4.436-.006l2.157 1.905c.356.315.728.605 1.114.87' />
      <path d='m34.705 7.261-3.378-.3a82.717 82.717 0 0 0-14.648 0l-3.383.3' />
      <path
        strokeLinejoin='round'
        d='M38.123 43.07v3.986M38.587 24.885h-.928a3.714 3.714 0 0 0-3.714 3.713v6.732a3.714 3.714 0 0 0 3.714 3.713h.928a3.714 3.714 0 0 0 3.714-3.713v-6.731a3.714 3.714 0 0 0-3.714-3.714Z'
      />
      <path strokeLinejoin='round' d='M46.358 37.146a7.971 7.971 0 0 1-7.704 5.923h-1.062a7.972 7.972 0 0 1-7.704-5.923' />
    </g>
    <defs>
      <clipPath id='voice-control_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(VoiceControl);
export default Memo;
