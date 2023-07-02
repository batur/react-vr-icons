import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgSpatialAudioUserSurround = ({ width = 24, height = 24, color = '#000', strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      d='M24 21.349a4.96 4.96 0 1 0 0-9.92 4.96 4.96 0 0 0 0 9.92ZM32.817 34.026a8.897 8.897 0 0 0-17.635 0M6.998 2.143C6.595 3.22 5.882 4.33 4.897 5.324 3.91 6.3 2.8 7.014 1.724 7.417M41.002 45.857c.403-1.077 1.124-2.187 2.101-3.173.986-.985 2.096-1.698 3.173-2.101M41.002 2.143c.403 1.077 1.124 2.187 2.101 3.173.986.985 2.096 1.698 3.173 2.101M6.998 45.857c-.403-1.077-1.124-2.187-2.101-3.173-.986-.985-2.096-1.698-3.173-2.101M12.906 2.143c-.598 2.502-1.97 5.005-4.074 7.109-2.103 2.103-4.607 3.475-7.108 4.073M35.094 45.857c.598-2.502 1.97-5.005 4.073-7.109 2.104-2.103 4.608-3.475 7.109-4.073M35.094 2.143c.598 2.502 1.97 5.005 4.073 7.109 2.104 2.103 4.608 3.475 7.109 4.073M12.906 45.857c-.598-2.502-1.97-5.005-4.074-7.109-2.103-2.103-4.607-3.475-7.108-4.073'
    />
  </svg>
);
const Memo = memo(SvgSpatialAudioUserSurround);
export default Memo;
