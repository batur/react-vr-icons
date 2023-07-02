import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgElementReallityKit2 = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M1.09 10a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v25a4 4 0 0 1-4 4h-38a4 4 0 0 1-4-4V10ZM14.59 43a.5.5 0 1 1 0-1M14.59 43a.5.5 0 0 0 0-1'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M18.59 42.5h14M18.34 20.057l-5.297 2.648a.821.821 0 0 0-.454.735v5.966c0 .312.176.596.454.735l4.929 2.464a.821.821 0 0 0 .735 0l5.015-2.507a.822.822 0 0 1 .735 0l5.015 2.507a.821.821 0 0 0 .735 0l4.928-2.464a.821.821 0 0 0 .454-.735V23.44a.822.822 0 0 0-.454-.735l-5.296-2.648m0 .01v-6.474a.822.822 0 0 0-.454-.735l-4.928-2.464a.822.822 0 0 0-.735 0l-4.929 2.464a.821.821 0 0 0-.454.735v6.475'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m18.34 20.057 5.75 2.875 5.75-2.875M12.73 23.003l5.61 2.804 5.75-2.875 5.75 2.875 5.609-2.805M29.697 13.156l-5.609 2.805-5.61-2.805M18.34 25.807v6.787M24.09 15.964v13.952M29.84 25.804v6.79'
    />
  </svg>
);
const Memo = memo(SvgElementReallityKit2);
export default Memo;
