import { css } from 'styled-components';

const colors = {
  MainColor: '#6F7CB2',
  SubColor: '#E9F1F9',
  MainColorB: '#445783',
  G1: '#F8F8F8',
  G2 : '#A2A2A2',
  G3: '#DFDFDF',
  G4: '#626262',
  M2: 'rgba(111, 124, 178, 0.7)',
  M3: 'rgba(111, 124, 178, 0.5)',
  M4: 'rgba(111, 124, 178, 0.3)',
  S2: 'rgba(233, 241, 249, 0.7)',
  S3: 'rgba(233, 241, 249, 0.5)',
  S4: 'rgba(233, 241, 249, 0.3)',
  B: '#000000',
  W: '#FFFFFF',
};

const fonts = {
  omyu_pretty: css`
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  `,
  S_Core_Dream: css`
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  `
};

const theme = {
  colors,
  fonts
};

export default theme;