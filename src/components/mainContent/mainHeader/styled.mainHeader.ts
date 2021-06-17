import styled from "styled-components"
// styled main header of the main content
export const Header = styled.header`
    position: fixed;
    top: 0;
    width: calc(100% - 22rem);
    background-color: #fff;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 1rem;
`;
export const TitleHeader = styled.div`
    h3 {
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
    }
    i {
        margin-right: 0.5rem;
        color: darkgray;
    }
`;
export const InputSearch = styled.input`
    border: 1px solid darkgray;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    margin-right: 1rem;
    &:placeholder {
        font-size: 1rem;
    }

    &:hover,
    &:active,
    &:focus {
        border: 1px solid Dimgray;
    }
`;
