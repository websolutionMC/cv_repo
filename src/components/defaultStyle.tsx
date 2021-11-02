import {createGlobalStyle} from "styled-components";

const ClearStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    a:link {
      color: inherit;  
      text-decoration: none;
    }


    a:visited {
      color: inherit;  
      text-decoration: none;
    }


    a:hover {
      color: inherit;  
      text-decoration: none;
    }

    a:active {
      color: inherit;
      text-decoration: none;
    }

    p {
      text-align: justify;
    }
  }
`;

export default ClearStyle;