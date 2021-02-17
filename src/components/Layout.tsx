// components
import {SidebarContainer}  from "./Sidebar"
// styled
import {Container, SideBar} from "./Layout.styled"


export function Layout (){
    return (
        <Container>
            <SidebarContainer />
            <div>messages</div>
        </Container>
    )
}