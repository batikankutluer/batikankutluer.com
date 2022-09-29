import { useEffect, useState } from "react";
import { Context, useContext } from "./context";

import CreateEntry from "./createEntry";

let link = (_) => _.replace(/(www|http:|https:)+[^\s]+[\w]/g, (x) => `<a href="${x}">${x}</a>`)

function Blog() {
    let [state, setState] = useContext(Context);

    useEffect(() => {
        fetch(`/api/authenticate?token=${localStorage.getItem("token")}`).then(res => setState(prev => ({ ...prev, admin: res.status === 200 })))

        setInterval(() => {
            fetch("/api/collection/entries").then(res => res.json()).then(entries => {
                setState((prev) => ({
                    ...prev,
                    entries: [...entries],
                    /* use this url to authenticate user:
                        /api/authenticate?token=${token}
                    */
                    token: localStorage.getItem("token"),
                }))
            })
        }, 1000)

    }, []);

    return <div>

        {
            state.admin && <CreateEntry />
        }

        {
            state.admin && <hr />
        }
        <div id="blogList">

            {
                state.entries.map(({ _id, title, context }, n) => {
                    return <Entry
                        id={_id}
                        title={title}
                        key={n}
                    >
                        {link(context)}
                    </Entry>
                })
            }
        </div>
    </div>
}

function Entry({ id, title, children }) {
    let [state, setState] = useContext(Context);

    function handleDelete() {
        fetch(`/api/collection/entries/?id=${id}&token=${state.token}`, {
            method: "DELETE",
        })
    }

    return <div className="entry">
        <div>
            <h3 className="title">{title}</h3>
            {
                state.admin && <button
                    onClick={handleDelete}
                >Bu Postu Sil.</button>
            }
        </div>
        <span>{children}</span>
    </div>
}

export default Blog;