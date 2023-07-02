import * as React from 'react';
import { SVGProps, memo } from 'react';
const ToolsTestflight = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <g stroke={color} strokeWidth={strokeWidth} clipPath='url(#tools-testflight_svg__a)'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M25.748 24.227c0 4.48-1.042 5.817-1.563 5.926-.303.282-1.061-.17-1.66-4.233-.75-5.08.243-10.55 1.27-10.55s1.953 3.256 1.953 8.857ZM29.782 29.27c-3.88-2.24-4.517-3.812-4.35-4.317-.093-.405.676-.835 4.495.678 4.773 1.89 9.055 5.424 8.502 6.374-.554.96-3.797.064-8.647-2.736ZM24.47 26.241c3.88-2.24 5.559-2.006 5.913-1.61.397.123.385 1.005-2.835 3.555-4.024 3.188-9.218 5.134-9.771 4.175-.554-.958 1.843-3.32 6.693-6.12Z'
      />
      <circle cx={24} cy={24} r={22.805} />
      <circle cx={24} cy={24} r={19.604} />
      <path
        strokeLinecap='round'
        d='M9.627 24c0-7.467 5.693-13.604 12.975-14.306M31.186 11.552c6.467 3.734 8.935 11.733 5.902 18.39M31.075 36.51c-6.5 3.676-14.644 1.74-18.84-4.252M14.413 24c0-4.624 3.274-8.483 7.63-9.387.052-.011.247-.035.21-.039M28.793 15.697c4.005 2.312 5.71 7.077 4.315 11.301l-.042.131M28.719 32.345c-4.025 2.276-8.996 1.326-11.927-2.021l-.128-.152'
      />
    </g>
    <defs>
      <clipPath id='tools-testflight_svg__a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(ToolsTestflight);
export default Memo;
