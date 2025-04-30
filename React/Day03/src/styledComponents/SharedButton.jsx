import styled from "styled-components";


let mainColor = "#0c2972";

let bgFun = ( { variant } ) => variant == 'outline' ? '#fff' : mainColor;
let colorFun = ( { variant } ) => variant == 'outline' ? mainColor : "#fff";


let SharedButton = styled.button`
    background-color: ${bgFun};
    outline:0;
    color:${colorFun};
    padding:0.5rem 0.75rem;
    border-radius: 3px;
    width: 160px;
    font-weight: bold;
    transition: all 0.4s ease-in-out;
    margin-left: 0.5rem;
    border: ${( { variant } ) => variant == 'outline' ? `1px solid ${mainColor}` : "none"};
    &:hover{

        background-color: ${colorFun};
        color:${bgFun};
        border:1px solid #0c2972;
    }
`

let GradientButton = styled( SharedButton )`
        background: #020024;
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
        &:hover{

            color:#fff
        }
`;// call as a function


export { SharedButton, GradientButton }

