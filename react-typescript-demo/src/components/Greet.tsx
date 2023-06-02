
type GreetProps = {
    name: string,
    messageCount: number,
    isloggedIn: boolean
}

export default function Greet(props: GreetProps) {
    return (
        <>
            {props.isloggedIn ? <div>Welcome {props.name} You have {props.messageCount} unread messages</div> : "Welcome Guest"}
        </>
    )
}
