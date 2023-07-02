import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgContentPassFullImmersive = ({ width = 16, height = 16, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m.948 44.771 1.82-.391m4.23-.943c.702-.151 1.405-.292 2.108-.422m31.842.401a77.44 77.44 0 0 0-2.109-.422m8.213 1.775-1.818-.39M13.395 42.28a75.626 75.626 0 0 1 1.595-.213m19.626.213a75.539 75.539 0 0 0-1.595-.213M47.053 2.242l-1.822.39m-4.332.98a77.44 77.44 0 0 1-2.108.423M7.033 3.597c.703.15 1.406.291 2.109.422M.948 2.244l1.818.39m31.839 2.098a74.058 74.058 0 0 1-21.221 0'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M16.235 17.769a1.75 1.75 0 0 0-3.47.462c.21 1.573 1.025 3.802 2.79 5.661a10.444 10.444 0 0 0 4.413 2.757v4.702l-.992 10.229a1.75 1.75 0 1 0 3.483.337l.847-8.732h1.35l.847 8.732a1.75 1.75 0 1 0 3.484-.337l-.992-10.23v-4.689a10.45 10.45 0 0 0 4.45-2.769c1.765-1.86 2.58-4.088 2.79-5.66a1.75 1.75 0 1 0-3.47-.463c-.123.927-.658 2.448-1.86 3.714-1.152 1.213-2.984 2.267-5.905 2.267-2.921 0-4.753-1.054-5.906-2.267-1.201-1.266-1.736-2.787-1.86-3.714Z'
    />
    <path stroke={color} strokeWidth={strokeWidth} d='M25.182 14.964a3.322 3.322 0 1 0 2.134 3.665' />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M26.877 14.484s-2.53.142-2.859 1.908c-.329 1.766 1.257 2.62 4.343 2.108.399-1.5-.38-3.213-1.484-4.016Z'
    />
  </svg>
);
const Memo = memo(SvgContentPassFullImmersive);
export default Memo;
