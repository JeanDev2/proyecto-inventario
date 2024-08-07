import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #FEAF00;
        --primary-1:#F8D442;
        --white: #fff;
        --grey-1: #6C6C6C;
        --headline-1: 700 2rem/2.5rem Montserrat;
        --headline-2: 600 1.375rem/1.687rem Montserrat;
        --body-1-regular: 400 0.875rem/1rem Montserrat;
        --body-2-medium: 500 0.875rem/1rem Montserrat;
        
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: linear-gradient(45deg, var(--primary), var(--primary-1));
    }
`;

export default GlobalStyles;
