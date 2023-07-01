import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgMoviesImmersive = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M12 30.994c-4.692.83-8.052 2.032-10 3.006V2c3.333 1.667 10.8 4 22 4s18.667-2.333 22-4v32c-1.948-.974-5.308-2.176-10-3.006'
    />
    <circle cx={24} cy={23.74} r={5.74} stroke={props.color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={props.strokeWidth} />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M12.098 44.427c.962-5.704 5.925-10.05 11.902-10.05 5.977 0 10.94 4.346 11.902 10.05'
    />
  </svg>
);
const Memo = memo(SvgMoviesImmersive);
export default Memo;
