// global styled 
import {GlobalStyle} from "../../global/styled.global"

// components
import {SidebarContainer}  from "../sidebar/Sidebar"
// styled
import {Container} from "./Layout.styled"


export function Layout (){
    return (
        <Container>
            <GlobalStyle />
            <SidebarContainer />
            <div>messages</div>
        </Container>
    )
}