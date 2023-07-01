import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualDisplayTablet = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m35.353 4.355-11.268 5.649V23.56l11.268 5.649L46.62 23.56V10.004L35.353 4.355Z'
    />
    <path stroke={props.color} strokeLinejoin='round' strokeWidth={props.strokeWidth} d='m24.075 10.199 11.317 5.84 11.262-5.84' />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M35.338 29.21V16.037M19.014 22H3.51c-1.196 0-2.165.97-2.165 2.165v17.316c0 1.195.97 2.164 2.165 2.164h28.137c1.195 0 2.165-.97 2.165-2.165v-7.153M5.5 22v21.645M28.627 30.152v13.493'
    />
  </svg>
);
const Memo = memo(SvgVirtualDisplayTablet);
export default Memo;
