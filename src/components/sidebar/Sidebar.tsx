import { Channels } from "../channels/channels";
import {DirectMessages} from "../directMessage/DirectMessage"

import { Sidebar, Header, H1, Username, Status } from "./Sidebar.styled";

export function SidebarContainer() {
  return (
    <Sidebar>
      <Header>
        <H1>clone slack</H1>
        <div>
          {" "}
          <i className="fas fa-bell"></i>
        </div>
        <Username>
          <Status></Status>
          Yasir Hamm
        </Username>
      </Header>
      <Channels />
      <DirectMessages />
    </Sidebar>
  );
}
