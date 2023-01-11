import App from "./App";

export function Param(){
    const path = window.location.pathname;
    console.log(path, window.location)
    let render;

    switch(path) {
        case '/pokemon':
            render = <App/>
        break;

        default:
            render = <h1>specify correct path</h1>
        break;
    }

    return (
        <>
        {render}
        </>
    )
}