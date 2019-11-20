import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  img {
    width: 100%;
  }

  .dark-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .section {
    margin-top: 8rem !important;
  }
`;

export default GlobalStyles;
