import styled from "styled-components";

export const ChannelsTitles = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    font-size: 1rem;
  }
`;

export const ChannelsList = styled.ul`
  margin-left:1rem;
  margin-top:1rem;
  li {
    margin-bottom:0.25rem;
    display:flex;
    align-items: center;
  }
`

export const Button = styled.button`
  padding:.5rem;
  background-color:transparent;
  color:#fff;
  border:none;
  margin-left:.5rem;
  &.channel-button{
    margin-top:1rem;
    i {
      margin-right:1rem
    }
  }
`