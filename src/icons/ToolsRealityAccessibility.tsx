import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgToolsRealityAccessibility = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeWidth={props.strokeWidth} clipPath='url(#tools-reality-accessibility_svg__a)'>
      <circle cx={24} cy={24} r={22.805} />
      <circle cx={24} cy={10.848} r={2.897} />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M35.404 19.34a1.88 1.88 0 1 0-1.32-3.521c-.477.179-1.669.43-3.518.63-1.79.193-4.05.324-6.566.324-2.517 0-4.777-.13-6.566-.324-1.85-.2-3.04-.451-3.518-.63a1.88 1.88 0 1 0-1.32 3.52c.956.359 2.557.645 4.433.848.89.096 1.878.177 2.942.237v6.332c0 .125.01.247.03.365l-2.448 11.453a1.88 1.88 0 0 0 3.76.006l2.057-9.675h1.26l2.056 9.675a1.88 1.88 0 0 0 3.76-.006l-2.448-11.453c.02-.119.03-.24.03-.364v-6.333a57.14 57.14 0 0 0 2.943-.237c1.875-.203 3.477-.49 4.433-.847Z'
      />
    </g>
    <defs>
      <clipPath id='tools-reality-accessibility_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgToolsRealityAccessibility);
export default Memo;
