import React, { useEffect } from "react";

import { Context, useContext } from "../components/context.jsx";

import Blog from "../components/blog";

import Header from "../components/header";
import Page from "../components/page";
import Footer from "../components/footer";

function AppBlog() {
    let [state, setState] = useContext(Context);

    useEffect(() => {
        setState((prev) => ({ ...prev, isBlogClicked: true }));
    }, [])

    return (
        <div className='App'>
            <Header />

            <Page pinnedTweet={state.pinnedTweet}>
                {!state.isBlogClicked || <Blog />}
            </Page>

            <Footer />
        </div>
    );
}

export default AppBlog;
