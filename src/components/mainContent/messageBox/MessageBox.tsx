import { MessageBoxContainer, MsgList } from "./styled.messageBox";
export const MessageBox = () => {
    const messages = [
        {
            message:
                "Lorem ipsum sed quo laudantium, impedit magni cumque, mollitia non beatae voluptatibus quod voluptates, cum quidem! ",
            user: "Noor",
            date: Date.now(),
        },
        {
            message:
                "Lorem ipsum sed quo laudantium, impedit magni cumque, mollitia non beatae voluptatibus quod voluptates, cum quidem! ",
            user: "Ammer",
            date: Date.now(),
        },
        {
            message:
                "Lorem ipsum sed quo laudantium, impedit magni cumque, mollitia non beatae voluptatibus quod voluptates, cum quidem! ",
            user: "Haden",
            date: Date.now(),
        },
        {
            message:
                "Lorem ipsum sed quo laudantium, impedit magni cumque, mollitia non beatae voluptatibus quod voluptates, cum quidem! ",
            user: "Mira",
            date: Date.now(),
        },
        {
            message:
                "Lorem ipsum sed quo laudantium, impedit magni cumque, mollitia non beatae voluptatibus quod voluptates, cum quidem! ",
            user: "Mery",
            date: Date.now(),
        },
    ];

    return (
        <MessageBoxContainer>
            <MsgList>
                {messages.map((msg) => (
                    <li>
                        <span className="username">{msg.user}</span>
                        <span className="date">
                            {new Intl.DateTimeFormat("en-GB").format(
                                new Date(msg.date)
                            )}
                        </span>
                        <p>{msg.message}</p> <br />
                        <br />
                    </li>
                ))}
            </MsgList>
        </MessageBoxContainer>
    );
};
