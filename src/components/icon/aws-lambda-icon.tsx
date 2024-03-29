import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  css?: StitchesCss
  width?: number
  height?: number
}

const AwsLambdaIcon = ({ css, width = 2065, height = 2500 }: Props) => {
  return (
    <Box
      as="svg"
      width={width}
      height={height}
      viewBox="0 0 256 310"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      css={css}
    >
      <title>AWS Lambda Logo</title>
      <path d="M0 245.262l16.322 8.161L19 248.668V59.333l-2.678-3.494L0 64v181.262" fill="#9D5025"/>
      <path d="M47.678 63.57l-31.356-7.731v197.584l31.356-7.302V63.57" fill="#F68536"/>
      <path d="M143.893 78.604l22.335-11.597 74.309 28.778-19.758 2.577-76.886-19.758" fill="#6B3A19"/>
      <path d="M144.752 230.658l21.906 11.597 74.308-28.778-19.758-2.578-76.456 19.759" fill="#FBBF93"/>
      <path d="M150.336 198.872l39.087 5.155 2.244-4.027v-90l-2.244-4.765-39.087 5.154v88.483M35.651 45.96l24.054-12.027L62.333 39v231l-2.628 5.329-24.054-12.027V45.96" fill="#9D5025"/>
      <path d="M108.671 259.007l-48.966 15.892V33.933l48.966 15.893v209.181" fill="#F68536"/>
      <path d="M89.772 289.933L128 309.262l4-4.595v-299L128 0 89.772 19.329v270.604M219.919 98.362l19.759-2.577 1.697 2.465V211l-1.697 2.906-19.759-2.577V98.362" fill="#9D5025"/>
      <path d="M189.423 105.235v99.221l40.805-49.825-40.805-49.396" fill="#F68536"/>
      <path d="M239.678 55.839L128 0v309.262l128-64V64l-16.322-8.161zm0 158.217l-73.45 21.936V73.27l73.45 21.936v118.85z" fill="#F68536"/>
    </Box>
  );
};

export default AwsLambdaIcon;
