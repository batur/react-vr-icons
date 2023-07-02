import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsLoading = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 36.672a1.904 1.904 0 1 0 0-3.808 1.904 1.904 0 0 0 0 3.808ZM32.96 32.96a1.904 1.904 0 1 0-2.693-2.692 1.904 1.904 0 0 0 2.692 2.692ZM36.672 24a1.904 1.904 0 1 0-3.808 0 1.904 1.904 0 0 0 3.808 0ZM32.96 15.04a1.904 1.904 0 1 0-2.693 2.692 1.904 1.904 0 0 0 2.692-2.692ZM24 15.136a1.904 1.904 0 1 0 0-3.808 1.904 1.904 0 0 0 0 3.808ZM17.732 17.732a1.904 1.904 0 1 0-2.693-2.692 1.904 1.904 0 0 0 2.693 2.692ZM15.135 24a1.904 1.904 0 1 0-3.807 0 1.904 1.904 0 0 0 3.807 0ZM17.732 30.268a1.904 1.904 0 1 0-2.693 2.693 1.904 1.904 0 0 0 2.693-2.693Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsLoading);
export default Memo;
