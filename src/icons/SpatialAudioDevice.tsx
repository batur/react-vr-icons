import * as React from 'react';
import { SVGProps, memo } from 'react';
const SpatialAudioDevice = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      d='M9.83 24.009a7.58 7.58 0 0 1 6.909-7.55l2.294-.205a56.107 56.107 0 0 1 9.934 0l2.29.204a7.584 7.584 0 0 1 6.913 7.554v.82a6.485 6.485 0 0 1-4.635 6.224 7.206 7.206 0 0 1-6.825-1.506l-1.336-1.18a2.07 2.07 0 0 0-2.745.005l-1.3 1.155a7.22 7.22 0 0 1-6.848 1.525 6.498 6.498 0 0 1-4.651-6.23v-.808Z'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeWidth={strokeWidth}
      d='m30.233 21.12-1.967-.175a48.154 48.154 0 0 0-8.53 0l-1.97.176'
    />
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M6.998 2.143C6.595 3.22 5.882 4.33 4.897 5.324 3.91 6.3 2.8 7.014 1.724 7.417M41.002 45.857c.403-1.077 1.124-2.187 2.101-3.173.986-.985 2.096-1.698 3.173-2.101M41.002 2.143c.403 1.077 1.124 2.187 2.101 3.173.986.985 2.096 1.698 3.173 2.101M6.998 45.857c-.403-1.077-1.124-2.187-2.101-3.173-.986-.985-2.096-1.698-3.173-2.101M12.906 2.143c-.598 2.502-1.97 5.005-4.074 7.109-2.103 2.103-4.607 3.475-7.108 4.073M35.094 2.143c.598 2.502 1.97 5.005 4.073 7.109 2.104 2.103 4.608 3.475 7.109 4.073M35.094 45.857c.598-2.502 1.97-5.005 4.073-7.109 2.104-2.103 4.608-3.475 7.109-4.073M12.906 45.857c-.598-2.502-1.97-5.005-4.074-7.109-2.103-2.103-4.607-3.475-7.108-4.073'
    />
  </svg>
);
const Memo = memo(SpatialAudioDevice);
export default Memo;
