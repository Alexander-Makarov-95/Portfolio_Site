import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  css?: StitchesCss
  width?: number
  height?: number
}

const AwsSesIcon = ({ css, width = 2140, height = 2500 }: Props) => {
  return (
    <Box
      as="svg"
      width={width}
      height={height}
      viewBox="0 0 256 299"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      css={css}
    >
      <title>AWS SES Logo</title>
      <path d="M60.556 47.602L0 144.01l60.556 96.424 1.056-.753L60.837 47.8l-.281-.198" fill="#876929"/>
      <path d="M128.187 223.105l-67.631 17.329V47.602l67.631 17.325v158.178" fill="#D9A741"/>
      <path d="M255.979 71.868l-32.6 5.391L148.538 0l-37.207 16.292 4.908 9.153-26.333 10.526v243.428l38.28 19.153.637-.499-.589-250.235 81.142 122.968 46.603-98.918" fill="#876929"/>
      <path d="M148.538 0l99.679 49.837-39.417 71.52L148.538 0" fill="#D9A741"/>
      <path d="M255.975 71.868L256 234.596l-127.813 63.956-.017-277.869 80.63 146.291 47.175-95.106" fill="#D9A741"/>
    </Box>
  );
};

export default AwsSesIcon;
