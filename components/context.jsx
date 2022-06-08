import React, { createContext, useState, useContext } from "react";

const Context = createContext({});

function ContextProvider(props) {
    const [state, setState] = useState({
        isBlogClicked: false,
        pinnedTweet: "Linçlemek ve haklı olmak bağımsız olaylardır.",
        mainText: "Adım Batıkan 15 yaşındayım. *Frontend Developer* olarak kendimi geliştiriyorum. Şimdilik kodladığım site daha bitmedi. Şuanki versiyonu *v0.1!* Bu nedenle takipte kal, yakında güzel şeyler olacak...",
        entries: [
            {
                title: "Giriş",
                context: "Burada amacım aklımdaki fikirleri ortaya koyabilmek."
            },
            {
                title: "Neden Sağ Liberteryenizme yakınım?",
                context: "Açıkçası bana mantıklı gelen buydu."
            },
            {
                title: "Neden Linçlemek ve haklı olmak bağımsız olaylardır?",
                context: "Herkes her konuda haklı olmuyor malesef, bir şeyi baskı kurarak dayatmak haklı kişinin olduğunu göstermez."
            }
        ]
    });

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider, useContext }