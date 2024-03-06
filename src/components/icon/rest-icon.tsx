import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const ApiRestIcon = ({ css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      css={{ width, height, ...css }}
    >
      <title>API REST logo</title>
      <Box
        as="path"
        style={{ fill: '#2196F3' }}
        d="M7,8h34c2.21,0,4,1.791,4,4v24c0,2.209-1.79,4-4,4H7c-2.209,0-4-1.791-4-4V12C3,9.791,4.791,8,7,8"
      />
      <Box
        as="path"
        style={{ fill: '#FFFFFF' }}
        d="M17.038,28.725h-4.292L11.909,32H8.581l4.87-16h2.88l4.903,16h-3.361L17.038,28.725z M13.431,26.033 h2.912l-1.456-5.703L13.431,26.033z M26,26.374V32h-3V16h5c1.542,0,2.771,0.491,3.689,1.473C32.605,18.454,33,19.729,33,21.297 s-0.39,2.806-1.295,3.714c-0.907,0.908-2.163,1.363-3.768,1.363H26z M26,23.681h2.116c0.599,0,1.063-0.201,1.393-0.604 C29.836,22.674,30,22.088,30,21.319c0-0.799-0.167-1.434-0.503-1.907c-0.335-0.472-0.785-0.712-1.349-0.72H26V23.681z M38,32h-3V16 h3V32z"
      />
    </Box>
  );
};

export default ApiRestIcon;