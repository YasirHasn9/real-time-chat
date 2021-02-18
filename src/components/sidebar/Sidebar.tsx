
import {Sidebar, Header} from "./Sidebar.styled"

export function SidebarContainer(){
    return (
        <Sidebar>
            <Header>
                <div>clone slack</div>
               <div> <i className="fas fa-bell"></i></div>
            </Header>
        </Sidebar>
    )
}