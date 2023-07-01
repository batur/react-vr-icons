import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgToolsRealityComposerPro = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m1.016 31.887 8.63 5.01m37.338-5.01-8.63 5.01m-22.331 3.712L24 45.24l7.977-4.63m-30.96-8.76 2.932-1.701m43.035 1.702-2.933-1.703'
    />
    <path
      stroke={props.color}
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M6.917 30.686V14.038a2 2 0 0 1 1.013-1.74l15.018-8.523a2 2 0 0 1 1.974 0L39.94 12.3a2 2 0 0 1 1.013 1.74v16.647a2 2 0 0 1-1.013 1.74l-15.018 8.523a2 2 0 0 1-1.974 0L7.93 32.426a2 2 0 0 1-1.013-1.74Z'
    />
    <path
      stroke={props.color}
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m23.935 6.922-10.639 6.039 10.64 6.038 10.638-6.038-10.639-6.039Z'
    />
    <path stroke={props.color} strokeLinejoin='round' strokeWidth={props.strokeWidth} d='m16.686 14.884 7.25-4.114 7.249 4.114' />
    <path
      stroke={props.color}
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m40.953 13.254-16.03 9.099a2 2 0 0 1-1.975 0L6.917 13.254M23.935 41.25V22.913'
    />
  </svg>
);
const Memo = memo(SvgToolsRealityComposerPro);
export default Memo;
