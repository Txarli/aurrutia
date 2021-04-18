import { createGlobalStyle } from 'styled-components';
import { colors, font } from '../theme';

import { reboot } from './reboot';
import { reset } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;800&display=swap');
  
  body {
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    ${font.base()};
    color: ${colors.black};
  }
`;
