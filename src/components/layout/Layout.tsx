// components
import {SidebarContainer}  from "../sidebar/Sidebar"
// styled
import {Container} from "./Layout.styled"


export function Layout (){
    return (
        <Container>
            <SidebarContainer />
            <div>messages</div>
        </Container>
    )
}