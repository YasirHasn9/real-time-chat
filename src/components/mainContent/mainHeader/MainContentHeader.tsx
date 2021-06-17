// styled
import { Header, TitleHeader, InputSearch } from "./styled.mainHeader";
export const MainContentHeader = () => {
    return (
        <Header>
            <TitleHeader>
                <div>
                    <h3>#general</h3>
                </div>
                <div>
                    <i className="far fa-user"></i>
                    32 members
                </div>
            </TitleHeader>
            <div>
                <InputSearch type="text" className="fas" placeholder="Search" />
            </div>
        </Header>
    );
};
