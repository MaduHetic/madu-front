import { createGlobalStyle } from 'styled-components'
import { Breakpoint, Font, Color } from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        background-clip: padding-box;
        margin: 0;
        outline: 0;
        padding: 0;
        word-break: break-word;
        &:before, &:after {
            box-sizing: border-box;
        }
    }

    html, body {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: sans-serif;
        overflow-x: hidden;
        position: relative;
    }

    html {
        font-size: 100%;
        height: 100%;
    }
    
    body {
        font-family: ${Font.family.main};
        font-size: ${Font.size.m};
        font-weight: ${Font.weight.normal};
        color: ${Color.main};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media screen and (max-width: ${Breakpoint.m}) {
            font-size: ${Font.size.s};
        }
    }
      
    img {
        user-select: none;
    }

    ol, ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: 400;
    }

    a {
        background: transparent;
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle