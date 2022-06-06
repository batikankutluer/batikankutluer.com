import { Context, useContext } from "./context";

function Blog() {
    let [state, setState] = useContext(Context);

    return <div id="blogList">
        {
            state.entries.map(({ title, context }, n) => {
                return <Entry
                    title={title}
                    key={n}
                >
                    {context}
                </Entry>
            })
        }
    </div>
}

function Entry({ title, children }) {
    return <div className="entry">
        <h3 className="title">{title}</h3>
        {children}
    </div>
}

export default Blog;