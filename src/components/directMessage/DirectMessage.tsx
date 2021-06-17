
import { MessageTitle } from "./style.directMessage"
import {Status} from "../sidebar/Sidebar.styled"
import {ChannelsList} from "../channels/style.channels"


export const DirectMessages = () => {
    const dms = ["David Ms" , "Aj" , "Hayden Salem" , "John Doe"]
    return (
        <>
        <MessageTitle>
            <h2>MessageTitle</h2>
            <i className="fas fa-plus"></i>
        </MessageTitle>
        <ChannelsList>
            {
                dms.map(dm => {
                    return <li><Status></Status> {dm}</li>
                })
            }
        </ChannelsList>
        </>
    )
}