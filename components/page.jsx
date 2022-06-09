import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Context, useContext } from "./context.jsx";

export default function Page({ children, pinnedTweet }) {
    let [state, setState] = useContext(Context);
    let [isTyping, setIsTyping] = useState(true);

    function handleTypeWriter(typewriter) {
        typewriter.changeDelay(20)
            .typeString(state.mainText.split("*")
                .map((text, n) => {

                    if (n % 2 == 1) return `<span class="highlight">${text}</span>`;

                    return text
                }).join(" "))
            .start().callFunction(() => {
                if (isTyping) return setIsTyping(false);
            })
    }

    function handleBlogButton() {
        setState((prev) => ({ ...prev, isBlogClicked: true }));
    }

    return <div id="page">
        <div id="top">
            <div id="left">
                {
                    state.isBlogClicked ? children : <span>
                        <Typewriter
                            onInit={handleTypeWriter}
                        />

                        {/*
                            Yes, i know its annoying. Use this code with tampermonkey for development.
                            document.querySelector(".hidden").className = "";
                        */}

                        <button className={isTyping ? "hidden" : "animate"}
                            onClick={handleBlogButton}
                        >Blogum için Tıkla!</button>
                    </span>
                }
            </div>

            <div id="right">

                <div className="logoContainer pinnedTweet">
                    <span style={{ fontSize: "2em", marginBottom: 10 }}>Sabitlenen Tweetim:</span>
                    <div className="highlight" style={{ fontWeight: "bold", fontSize: "1.3em" }}>
                        {pinnedTweet}
                    </div>
                </div>

            </div>
        </div>

        <div id="bottom"></div>
    </div>
}