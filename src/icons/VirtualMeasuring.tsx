import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualMeasuring = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M18.309 37.39V11.97a.813.813 0 0 0-.814-.813H13.7a.814.814 0 0 0-.813.814V37.39M18.309 31.823h-2.17M18.309 24.273h-2.17M18.309 16.724h-2.17M31.771 36.588l.558-6.686h2.785v-3.9a5.572 5.572 0 0 0-11.143 0v3.9h2.786l.557 6.686h4.457ZM29.543 17.724a3.557 3.557 0 1 0 0-7.114 3.557 3.557 0 0 0 0 7.114Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVirtualMeasuring);
export default Memo;
