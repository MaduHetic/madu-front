import { createGlobalStyle } from 'styled-components'
import { Breakpoint, Font, Color } from './variables'

const Normalize = createGlobalStyle`
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
        font-size: 62.5%;
        height: 100%;
    }
    
    body {
        height: 100%;
        font-family: ${Font.family.main}, sans-serif;
        font-size: ${Font.size.m};
        font-weight: ${Font.weight.normal};
        color: ${Color.textcolor};
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media screen and (max-width: ${Breakpoint.m}) {
            font-size: ${Font.size.s};
        }
    }
      
    img {
        max-width: 100%;
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

    .mapboxgl-marker {
        pointer-events: none;
    }

    .MarkerCustom {
        background: rgba(94,197,176, 0.05);
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 1px solid rgb(94,197,176);
        pointer-events: none;
        z-index: 1;
        position: relative;
    }

    .MarkerCustom-currentEntity {
        background: #5EC5B0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        opacity: 1;
        pointer-events: none;
        z-index: 1;
        position: relative;
    }

    input::-webkit-search-cancel-button {
        display: none;
    }
`

export default Normalize