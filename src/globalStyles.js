import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #008c94;
        --secondary-color: #ff893b;
        --dark-bg: #003130;
        --dark-bg-txt: #FF893B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    .heroTitle {
        color: var(--primary-color);
        text-align: center;
    }

    .scrolled {
        background-color: black!important;
        transition:500ms ease;
        background: linear-gradient(90deg, rgb(224, 107, 28) 0%, rgb(0, 140, 148) 100%)
    }
`;

export default GlobalStyle;