import { createGlobalStyle } from "styled-components";

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
    margin: 40px;
    margin-top: 8rem !important;
  }

  a {
    color: white !important;
    text-decoration: none;
  }

  .dropdown {
    color: white;
    .nav-item {
      .nav-link {
        /* color: black !important; */
      }
    }
  }
`;

export default GlobalStyles;
