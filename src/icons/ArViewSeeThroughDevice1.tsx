import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgArViewSeeThroughDevice1 = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M32.127 40.395c3.881-.771 7.199-2.076 9.533-3.75 2.334-1.674 3.58-3.643 3.58-5.656 0-2.029-1.263-3.995-3.58-5.657M23.999 41.17a43.72 43.72 0 0 1-4.144-.195c-4.12-.393-7.906-1.363-10.876-2.786-2.97-1.424-4.994-3.238-5.814-5.213-.82-1.975-.398-4.022 1.21-5.882a11.24 11.24 0 0 1 1.962-1.76'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m21.78 36.73 4.438 4.44-4.439 4.438'
    />
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M5.034 12.843c0-5.255 4.013-9.64 9.247-10.106l3.071-.273a75.082 75.082 0 0 1 13.296 0l3.066.273a10.15 10.15 0 0 1 9.252 10.11v1.098a8.68 8.68 0 0 1-6.205 8.32 9.644 9.644 0 0 1-9.134-2.016l-1.787-1.578a2.77 2.77 0 0 0-3.675.005l-1.74 1.547a9.664 9.664 0 0 1-9.165 2.04 8.697 8.697 0 0 1-6.226-8.339v-1.08Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='m32.966 8.068-2.83-.251a69.283 69.283 0 0 0-12.268 0l-2.834.251'
    />
  </svg>
);
const Memo = memo(SvgArViewSeeThroughDevice1);
export default Memo;
