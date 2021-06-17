import { useState } from "react";
import { ChannelsTitles, ChannelsList, Button } from "./style.channels";

export function Channels() {
    const [channels, setChannels] = useState([
        "announcement",
        "general",
        "frontend",
        "backend",
        "random",
    ]);

    return (
        <>
            <ChannelsTitles>
                <h2>Channels</h2>
                <i className="fas fa-plus"></i>
            </ChannelsTitles>
            <ChannelsList>
                {channels.map((channel) => {
                    return <li>#{channel}</li>;
                })}
            </ChannelsList>
            <Button className="channel-button">
                <i className="fas fa-plus"></i>Add Channel
            </Button>
        </>
    );
}
