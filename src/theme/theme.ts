import { css } from 'styled-components';
import { rem } from 'polished';

export const grid = {
  contentMaxWidth: 800,
};

export const size = {
  none: 0,
  xtiny: 4,
  tiny: 8,
  small: 12,
  mini: 16,
  base: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
  huge: 96,
};

export const iconSize = {
  mini: 16,
  base: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
};

export const breakpoints = {
  mobile: 480,
  desktop: 1132,
};

export const font = {
  small() {
    return css`
      font-size: ${rem(12.64)};
      line-height: ${rem(17)};
    `;
  },
  base() {
    return css`
      font-size: ${rem(16)};
      line-height: ${rem(22)};
    `;
  },
  h4() {
    return css`
      font-size: ${rem(18)};
      line-height: ${rem(24)};
    `;
  },
  h3() {
    return css`
      font-size: ${rem(25.63)};
      line-height: ${rem(35)};
    `;
  },
  h2() {
    return css`
      font-size: ${rem(36.41)};
      line-height: ${rem(50)};
    `;
  },
  h1() {
    return css`
      font-size: ${rem(41.83)};
      line-height: ${rem(57)};
    `;
  },
};

export const fontWeight = {
  light: 300,
  bold: 700,
  extraBold: 800,
};

export const colors = {
  black: '#000000',
  grey: '#aaaaaa',
};
