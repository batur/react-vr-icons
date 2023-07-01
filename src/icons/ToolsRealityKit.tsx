import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgToolsRealityKit = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={props.color} strokeWidth={props.strokeWidth} clipPath='url(#tools-reality-kit_svg__a)'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.043 15.459 2.5 23.145a2 2 0 0 0-1.013 1.74v8.832a2 2 0 0 0 1.013 1.74l20.448 11.605a2 2 0 0 0 1.974 0L45.37 35.456a2 2 0 0 0 1.013-1.74v-8.831a2 2 0 0 0-1.013-1.74l-5.312-3.015'
      />
      <path strokeLinejoin='round' d='m1.487 29.88 21.46 12.181a2 2 0 0 0 1.975 0l21.46-12.18' />
      <path strokeLinejoin='round' d='M46.383 24.22 23.935 36.96 1.487 24.22M23.935 47.122V36.96' />
      <path strokeLinecap='round' d='M35.998 4.068V18.69c0 1.185-1.585 2.221-3.953 2.79' />
      <ellipse cx={27.874} cy={4.068} rx={8.123} ry={3.249} />
      <path
        strokeLinejoin='round'
        d='M30.076 25.233c.441.749.733 1.692.128 2.317-1.176 1.215-4.125 2.076-7.578 2.076-3.453 0-6.402-.861-7.578-2.076-.605-.625-.313-1.568.127-2.317l7.45-12.666 7.451 12.666Z'
      />
      <path strokeLinecap='round' d='M19.75 4.068v8.252' />
    </g>
    <defs>
      <clipPath id='tools-reality-kit_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgToolsRealityKit);
export default Memo;
