import { Context, useContext } from "./context";

export default function Header() {
    let [state, setState] = useContext(Context);

    return <header>
        <h1 className="weirdText">
            {
                state.playlist ? "" : state.isBlogClicked ? "Blogum" : "Selamlar!"
            }
        </h1>
    </header>
}