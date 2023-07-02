import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgContentPassThrough = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m47.053 2.242-1.822.39M40.899 3.613a77.44 77.44 0 0 1-2.109.422'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M22.55 18.604a1.75 1.75 0 1 0-3.47-.462c-.12.9-.636 2.288-1.814 3.436-1.136 1.108-2.98 2.086-5.955 2.086-3.698 0-6.208.965-7.828 2.593-1.592 1.6-2.046 3.568-2.231 4.956a1.75 1.75 0 1 0 3.47.462c.147-1.112.455-2.159 1.242-2.95.4-.402 1.003-.814 1.94-1.114l-.631 3.509-1.997 10.295a1.75 1.75 0 1 0 3.436.667l1.725-8.897h1.496l.847 8.732a1.75 1.75 0 0 0 3.483-.337l-.992-10.23v-4.72c1.848-.54 3.314-1.45 4.439-2.546 1.791-1.747 2.626-3.88 2.84-5.48Z'
    />
    <circle cx={3.322} cy={3.322} r={3.322} stroke={color} strokeWidth={strokeWidth} transform='matrix(-1 0 0 1 39.366 14.762)' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M25.45 18.604a1.75 1.75 0 0 1 3.47-.462c.12.9.636 2.288 1.814 3.436 1.136 1.108 2.98 2.086 5.955 2.086 3.698 0 6.208.965 7.828 2.593 1.591 1.6 2.046 3.568 2.231 4.956a1.75 1.75 0 0 1-3.47.462c-.148-1.112-.455-2.159-1.242-2.95-.4-.402-1.004-.814-1.94-1.114l.631 3.509 1.997 10.295a1.75 1.75 0 1 1-3.436.667l-1.725-8.897h-1.496l-.847 8.732a1.75 1.75 0 1 1-3.483-.337l.991-10.23v-4.72c-1.848-.54-3.314-1.45-4.438-2.546-1.791-1.747-2.627-3.88-2.84-5.48Z'
    />
    <path stroke={color} strokeWidth={strokeWidth} d='M13.099 14.964a3.322 3.322 0 1 0 2.134 3.665' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M14.794 14.484s-2.53.143-2.86 1.908c-.328 1.766 1.258 2.62 4.343 2.108.4-1.5-.38-3.213-1.483-4.016Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M19.005 41.685a73.81 73.81 0 0 1 9.979 0M47.053 44.771l-1.822-.39M.948 44.769l1.818-.39M34.605 4.732a74.058 74.058 0 0 1-21.221 0M7.033 3.597c.703.15 1.406.291 2.109.422M.947 2.244l1.82.39'
    />
  </svg>
);
const Memo = memo(SvgContentPassThrough);
export default Memo;
