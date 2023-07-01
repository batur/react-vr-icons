import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgHeadLockContentMovement = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeWidth={props.strokeWidth} clipPath='url(#head-lock-content-movement_svg__a)'>
      <path
        strokeLinejoin='round'
        d='M20.622 1.756a1 1 0 0 0-1.684-.495L1.022 19.177a1 1 0 0 0 .495 1.684l4.741 1.03a3 3 0 0 0 2.759-.81L20.843 9.256a3 3 0 0 0 .81-2.759l-1.03-4.741Z'
      />
      <path d='M13.693 22.063a.5.5 0 1 1-.708-.707' />
      <path d='M13.693 22.063a.5.5 0 0 0-.708-.707' />
      <path strokeLinecap='round' d='m16.167 18.881 5.657-5.656' />
      <path
        strokeLinejoin='round'
        d='M43.286 43.525c3.13-3.13 3.708-7.624.453-10.879.726-.362.756-.906.68-1.133-.226-.68-1.737-.982-2.946-1.133-2.85-2.851-7.175-3.282-10.308-1.242 0 0-1.25-.798-2.157.109-.907.906-.11 2.157-.11 2.157-2.04 3.132-1.608 7.457 1.243 10.308.15 1.209.453 2.72 1.133 2.946.227.076.77.046 1.133-.68 3.255 3.255 7.75 2.676 10.88-.453Z'
      />
      <path strokeLinecap='round' d='M46.604 9.93C43.5 3.646 35.666 1.18 29.103 4.42l-1.318.757' />
      <path strokeLinecap='round' strokeLinejoin='round' d='M31.488 6.438 27.69 5.151l1.287-3.796' />
      <path
        strokeLinecap='round'
        d='m26.685 26.923-2.122-2.121M21.735 21.974l-2.122-2.122M8.285 8.524 6.164 6.403M3.335 3.574 1.214 1.453'
      />
    </g>
    <defs>
      <clipPath id='head-lock-content-movement_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgHeadLockContentMovement);
export default Memo;
