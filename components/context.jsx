import React, { createContext, useState, useContext, useEffect } from "react";

const Context = createContext({});

function ContextProvider(props) {
    const [state, setState] = useState({
        isBlogClicked: false,
        admin: false,
        pinnedTweet: "Linçlemek ve haklı olmak bağımsız olaylardır.",
        mainText: "Adım Batıkan 15 yaşındayım. *Frontend Developer* olarak kendimi geliştiriyorum. Şimdilik kodladığım site daha bitmedi. Şuanki versiyonu *v0.1!* Bu nedenle takipte kal, yakında güzel şeyler olacak...",
        entries: []
    });

    useEffect(() => {
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
    }, [])

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider, useContext }