// global styled
import { GlobalStyle } from "../../global/styled.global";

// components
import { SidebarContainer } from "../sidebar/Sidebar";
import { MainContent } from "../mainContent/MainContent"

// styled
import { Container } from "./Layout.styled";

export function Layout() {
  return (
    <Container>
      <GlobalStyle />
      <SidebarContainer />
      <MainContent />
    </Container>
  );
}
