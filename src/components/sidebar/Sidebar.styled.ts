import styled from "styled-components"


export const Sidebar = styled.div`
    height:100%;
    width: 200px;
    background:rebeccapurple;
`;


export const Header = styled.header`
    display:grid;
    grid-template-columns: 1fr 25px;
    color:white;
    padding:1rem;
`

export const H1 = styled.h1`
    font-size:1.3rem;
    font-weight:900;
`

export const Username = styled.div`
    grid-column-start:1;
    grid-column-end:3;
    margin-top:1rem;
`

export const Status = styled.span`
    width:.6rem;
    height:.6rem;
    border-radius:100%;
    background-color:green;
    display:inline-block;
    margin-right:.5rem;
    vertical-align:middle;
`