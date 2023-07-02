import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgDeviceSettingNutAppleVisionPro = ({
  width = 24,
  height = 24,
  color = '#000',
  strokeWidth = 1.5,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='M24.228 23.54a3.281 3.281 0 0 0-2.41.815l-2.12 1.872a11.442 11.442 0 0 1-10.838 2.39 10.297 10.297 0 0 1-7.36-9.869v-1.301A12.042 12.042 0 0 1 12.476 5.452l3.637-.323a89.073 89.073 0 0 1 15.774 0l3.642.323A12.036 12.036 0 0 1 46.5 17.442v1.282c0 1.4-.282 2.748-.799 3.982'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='m25.738 30 10.285-6 10.286 6v10.286l-10.285 6-10.286-6V30Z'
    />
    <circle cx={36.023} cy={35.143} r={2.973} stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth} />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m34.636 11.133-3.356-.298a82.198 82.198 0 0 0-14.555 0l-3.362.298'
    />
  </svg>
);
const Memo = memo(SvgDeviceSettingNutAppleVisionPro);
export default Memo;
