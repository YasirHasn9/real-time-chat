import styled from "styled-components"
export const MessageBoxContainer = styled.div`
    margin-top: 6rem;
`;

export const MsgList = styled.ul`
    li {
        margin-top: 0.5rem;
        .username {
            font-size: 1.2rem;
            font-weight: bold;
        }
        .date {
            color: gray;
            margin-left: 1rem;
        }
    }
`;
