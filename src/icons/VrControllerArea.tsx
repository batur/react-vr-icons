import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrControllerArea = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path stroke={props.color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={props.strokeWidth} d='M19 4.632 24 2l5 2.632' />
    <path
      stroke={props.color}
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M22.18 27.236a7.419 7.419 0 0 1-7.418-7.42h11.53l8.26 8.261a3.389 3.389 0 1 1-4.792 4.792l-5.634-5.633H22.18Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M20.633 14.052h4.911M23.089 19.82v-5.768M20.087 27.242c.311.584.558 1.378.619 2.304.09 1.362 1.046 2.733 2.411 2.733h6.047'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M38 38.632 43 36v-6M10 9.368 5 12v6M10 38.632 5 36v-6M19 43.368 24 46l5-2.632M38 9.368 43 12v6'
    />
  </svg>
);
const Memo = memo(SvgVrControllerArea);
export default Memo;