import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    .scrolled {
        background-color: black!important;
        transition:500ms ease;
        background: linear-gradient(90deg, rgb(224, 107, 28) 0%, rgb(0, 140, 148) 100%)
    }
`;

export default GlobalStyle;