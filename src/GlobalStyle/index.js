import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
    body{
        font-family: 'Lato', sans-serif;
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
`;
