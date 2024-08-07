// rfce
type GreetProps = {
    name: string
    count: number
    isLogged: boolean
};

function Greet(props: GreetProps) {
    return (
        <div>
            {
                props.isLogged ? <h2>Hello, {props.name}: You have 10 unread messages</h2> : <h2>Please, Log In</h2>
            }
        </div>
    );
}

export default Greet;
