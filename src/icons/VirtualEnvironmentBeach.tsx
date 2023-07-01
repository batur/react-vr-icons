import * as React from 'react';
import { SVGProps, memo } from 'react';
const SvgVirtualEnvironmentBeach = (props: SVGProps<SVGSVGElement> = { width: 16, height: 16, color: '#000', strokeWidth: 1.5 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={props.width} height={props.height} fill='none' viewBox='0 0 48 48' {...props}>
    <path
      fill='#000'
      d='M7.175 13.745h.75a.75.75 0 0 0-.533-.718l-.217.718Zm33.65 0-.218-.718a.75.75 0 0 0-.532.718h.75Zm-.75 29.242a.75.75 0 0 0 1.5 0h-1.5Zm-33.65.008a.75.75 0 0 0 1.5 0h-1.5ZM1.814 9.373c0-.501.369-1.151 1.467-1.879 1.068-.709 2.664-1.376 4.703-1.948C12.052 4.406 17.714 3.69 24 3.69v-1.5c-6.382 0-12.188.725-16.42 1.912-2.112.592-3.876 1.311-5.128 2.142C1.228 7.055.314 8.097.314 9.373h1.5ZM24 3.69c6.285 0 11.948.716 16.016 1.856 2.039.572 3.635 1.24 4.703 1.948 1.098.728 1.467 1.378 1.467 1.879h1.5c0-1.276-.914-2.318-2.138-3.13-1.253-.83-3.016-1.549-5.127-2.14C36.187 2.914 30.382 2.19 24 2.19v1.5ZM7.392 13.027c-1.86-.563-3.303-1.206-4.264-1.88-.984-.69-1.314-1.3-1.314-1.774h-1.5c0 1.213.829 2.215 1.953 3.003 1.145.802 2.758 1.502 4.691 2.086l.434-1.435Zm38.794-3.654c0 .475-.33 1.085-1.314 1.774-.962.674-2.405 1.317-4.265 1.88l.435 1.435c1.933-.585 3.545-1.284 4.691-2.086 1.124-.788 1.953-1.79 1.953-3.003h-1.5Zm-6.111 4.372v29.242h1.5V13.745h-1.5Zm-33.65 0v29.25h1.5v-29.25h-1.5Z'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M1.064 9.436v29.191c0 3.553 10.269 6.433 22.936 6.433s22.936-2.88 22.936-6.433V9.47'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeWidth={props.strokeWidth}
      d='M46.936 23.762c0 1.704-2.31 3.257-6.098 4.426M13.574 3.676v5.76M34.425 3.676v5.76M1.064 23.762c0 1.707 2.317 3.262 6.117 4.432'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M25.492 33.048c.587.285 1.23.431 1.882.428a4.64 4.64 0 0 0 3.375-1.5 5.511 5.511 0 0 0 4.5 1.5M23.134 22.453l-.768 14.76M16.288 37.226l4.946-15.395M21.234 21.83l8.276 2.71a.75.75 0 0 0 .975-.862 4.728 4.728 0 0 0-3.6-4.015c-3.75-.75-5.25 1.5-5.25 1.5l-.4.667'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='M21.234 21.83 13.7 23.877a.75.75 0 0 1-.934-.874 4.754 4.754 0 0 1 3.616-4.088c2.182-.437 4.273 0 5.528 1.925M26.078 19.544l3.1-3.117a.748.748 0 0 0-.209-1.211 4.868 4.868 0 0 0-5.088.51c-1.7 1.273-1.5 3.938-1.5 3.938v.769'
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={props.strokeWidth}
      d='m17.678 18.76-1.95-2.116a.748.748 0 0 1 .394-1.242c.827-.16 1.667-.24 2.51-.238a5.08 5.08 0 0 1 3.967 2.572M12.75 37.226h22.5'
    />
  </svg>
);
const Memo = memo(SvgVirtualEnvironmentBeach);
export default Memo;