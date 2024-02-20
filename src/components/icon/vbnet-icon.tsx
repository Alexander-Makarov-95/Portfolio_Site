import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const VbNetIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      fill="none"
      height={height || "70.94651097"}
      viewBox="-4.19664331 -2.74986766 70.94651097 70.94651097"
      width={width || "70.94651097"}
      css={{ fill: `$${color}`, ...css }}
    >
      <title>VB.NET logo</title>
      <circle cx="32" cy="32" fill="#004e8c" r="32"/>
      <g fill="#fff">
        <path d="m9.82 9a32 32 0 1 0 45.18 45.18z" opacity=".1"/>
        <path d="m33.29 19.4-9.29 25.2h-3.29l-9.14-25.2h3.29l7 20a11.87 11.87 0 0 1 .51 2.23h.07a11 11 0 0 1 .56-2.28l7.12-20zm3.63 25.2v-25.2h7.17a7.84 7.84 0 0 1 5.18 1.6 5.17 5.17 0 0 1 1.92 4.17 6.13 6.13 0 0 1 -1.19 3.72 6.26 6.26 0 0 1 -3.2 2.25v.07a6.41 6.41 0 0 1 4.08 1.92 5.92 5.92 0 0 1 1.53 4.23 6.59 6.59 0 0 1 -2.32 5.24 8.64 8.64 0 0 1 -5.85 2zm3-22.54v8.14h3a5.74 5.74 0 0 0 3.79-1.2 4.07 4.07 0 0 0 1.39-3.3q0-3.67-4.83-3.67zm0 10.79v9.07h4a6 6 0 0 0 4-1.23 4.21 4.21 0 0 0 1.43-3.37q0-4.46-6.08-4.46z" />
      </g>
    </Box>
  );
};

export default VbNetIcon;