import { Context, useContext } from "./context";

export default function Header() {
    let [state, setState] = useContext(Context);

    return <header>
        <h1 className="weirdText">
            {
                state.isBlogClicked ? "Blogum" : "Selamlar!"
            }
        </h1>
    </header>
}