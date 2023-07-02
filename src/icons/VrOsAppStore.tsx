import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVrOsAppStore = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M12.836 34.448a1.824 1.824 0 0 0 3.393.681l.402-.68M24.523 28.064h-4.171l7.734-13.462a1.825 1.825 0 0 0-3.242-1.824L24 14.37l-.924-1.593a1.825 1.825 0 1 0-3.242 1.824l1.982 3.43-5.8 10.032h-3.953a1.824 1.824 0 0 0 0 3.648H26.64'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m25.58 24.424 6.19 10.713a1.826 1.826 0 0 0 3.243-1.824l-.925-1.593h1.849a1.824 1.824 0 0 0 0-3.648h-3.952l-4.257-7.297'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m46.939 44.877-1.81-.455M40.864 43.3c-.699-.175-1.398-.34-2.098-.491M13.447 41.977a63.04 63.04 0 0 1 21.117 0M7.081 43.325c.7-.176 1.399-.34 2.098-.492M1.06 44.88l1.813-.456M46.939 3.123l-1.81.455M40.864 4.7c-.699.175-1.398.34-2.098.492M13.447 6.023a63.036 63.036 0 0 0 21.117 0M7.081 4.675c.7.176 1.399.34 2.098.492M1.06 3.12l1.813.456'
    />
  </svg>
);
const Memo = memo(SvgVrOsAppStore);
export default Memo;
