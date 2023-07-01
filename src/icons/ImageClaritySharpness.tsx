import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgImageClaritySharpness = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      d='M1.706 24c0 12.313 9.982 22.294 22.294 22.294V1.706C11.687 1.706 1.706 11.687 1.706 24Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M24 24.006h3.932M33.096 24.006h3.932M42.192 24.006h3.932M24 12.847h3.932M33.096 12.847h3.932M42.192 12.847h.932M24 35.142h3.932M33.096 35.142h3.932M42.192 35.142h.932M29 18.427h3.932M29 29.562h3.932M38.096 18.427h3.932M38.096 29.562h3.932M29 7.267h3.932M29 40.722h3.932M38.096 7.267h.932M38.096 40.722h.932M24 1.711h3.932M24 46.278h3.932'
    />
  </svg>
);
const Memo = memo(SvgImageClaritySharpness);
export default Memo;
