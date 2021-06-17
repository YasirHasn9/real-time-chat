import { MainContentHeader } from "./mainHeader/MainContentHeader";
import { MessageBox } from "./messageBox/MessageBox";
import { InputMessage } from "./inputMessage/InputMessage";

// styled
import { ContainerMain } from "./styled.main";
export const MainContent = () => {
    return (
        <ContainerMain>
            <MainContentHeader />
            <MessageBox />
            <InputMessage />
        </ContainerMain>
    );
};
