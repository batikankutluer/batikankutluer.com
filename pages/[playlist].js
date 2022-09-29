import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { Context, useContext } from "../components/context.jsx";

import { useRouter } from "next/router";

import Header from "../components/header";
import Page from "../components/page";
import Footer from "../components/footer";

import css from "../styles/playlists.module.css"

function Playlist() {
    let [state, setState] = useContext(Context);
    let [playlists, setPlaylists] = useState([]);

    const router = useRouter()
    const { playlist } = router.query;

    useEffect(() => {
        setState((prev) => ({ ...prev, playlist: true }));

        fetch(`/api/playlist/${playlist}`).then(x => x.json()).then(data => {
            console.log("length: ", data.length)
            setPlaylists(data)
        }).catch(() => { })

    }, [])

    function handleClick() {
        router.push("/playlists")
    }

    return (
        <div className='App'>
            <Header />

            <Page>
                <h1 onClick={() => handleClick()} className={css.return}> Playlistlere geri dönmek için tıkla</h1>

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
    let { title, artist } = track

    return <div className={[css.white, css.container, css.playlist].join(" ")}>
        <span>{`${artist.name} - ${title}`}</span>
    </div >
}


export default Playlist;