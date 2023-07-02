import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSpatialAudioHeadphone = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M6.998 2.018c-.403 1.077-1.124 2.187-2.101 3.173-.986.985-2.096 1.698-3.173 2.101M41.002 45.732c.403-1.077 1.124-2.187 2.101-3.173.986-.985 2.096-1.698 3.173-2.101M41.002 2.018c.403 1.077 1.124 2.187 2.101 3.173.986.985 2.096 1.698 3.173 2.101M6.998 45.732c-.403-1.077-1.124-2.187-2.101-3.173-.986-.985-2.096-1.698-3.173-2.101M12.906 2.018c-.598 2.502-1.97 5.005-4.074 7.109C6.73 11.23 4.225 12.602 1.724 13.2M35.094 45.732c.598-2.502 1.97-5.005 4.073-7.109 2.104-2.103 4.608-3.475 7.109-4.073M35.094 2.018c.598 2.502 1.97 5.005 4.073 7.109 2.104 2.103 4.608 3.475 7.109 4.073M12.906 45.732c-.598-2.502-1.97-5.005-4.074-7.109-2.103-2.103-4.607-3.475-7.108-4.073M31.864 27.804v-5.222A7.887 7.887 0 0 0 24 14.718a7.887 7.887 0 0 0-7.864 7.864v5.222'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24.136 31.557a1.475 1.475 0 0 1-1.475 1.475v0a4.424 4.424 0 0 1 0-8.847v0a1.474 1.474 0 0 1 1.475 1.474v5.898ZM31.864 31.557a1.475 1.475 0 0 0 1.475 1.475v0a4.424 4.424 0 0 0 4.424-4.424v0a4.424 4.424 0 0 0-4.424-4.423v0a1.475 1.475 0 0 0-1.475 1.474v5.898Z'
    />
  </svg>
);
const Memo = memo(SvgSpatialAudioHeadphone);
export default Memo;
