import React, { useEffect, useState } from "react";
import Link from 'next/link'

import { Context, useContext } from "../components/context.jsx";

import Blog from "../components/blog";

import Header from "../components/header";
import Page from "../components/page";
import Footer from "../components/footer";

import css from "../styles/playlists.module.css"

function AppBlog() {
    let [state, setState] = useContext(Context);
    let [playlists, setPlaylist] = useState([]);

    useEffect(() => {
        setState((prev) => ({ ...prev, playlist: true }));

        fetch("/api/playlists").then(x => x.json()).then((data) => {
            setPlaylist(data)
        })
    }, [])

    return (
        <div className='App'>
            <Header />

            <Page>
                <h1>Playlists</h1>

                {
                    playlists.map((track, n) => {
                        return <Track key={n} track={track} />
                    })
                }

            </Page>

            <Footer />
        </div>
    );
}

function Track({ track }) {
    let { id, title, creation_date } = track

    return <div className={[css.white, css.container].join(" ")}>
        <p className={css.trackTitle}>{title}</p>
        <h6 className={css.date}>{creation_date}</h6>
        <Link
            href={{
                pathname: '/[playlist]',
                query: { playlist: id }
            }}
            as={`/${id}`} className={css.send}>Playlist'e git.</Link>
    </div >
}



export default AppBlog;