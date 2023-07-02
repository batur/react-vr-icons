import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsPasscode = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M9.98 21.244v5.512M19.562 21.244v5.512M29.145 21.244v5.512M38.727 21.244v5.512M7.594 22.622l4.774 2.756M17.175 22.622l4.775 2.756M26.758 22.622l4.774 2.756M36.34 22.622l4.775 2.756M12.368 22.622l-4.774 2.756M21.95 22.622l-4.774 2.756M31.532 22.622l-4.774 2.756M41.114 22.622l-4.774 2.756'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsPasscode);
export default Memo;
