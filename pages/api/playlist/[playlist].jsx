const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
})

export default async function handler(req, res) {
    const { playlist } = req.query

    let d = await _fetch(`https://api.deezer.com/playlist/${playlist}/tracks`);

    await res.status(200).send(d)
}

async function _fetch(link, playlists = []) {
    let x = await (await fetch(link, { agent })).json()

    playlists = [...playlists, ...x.data]

    if (typeof x.next != "string") return playlists

    return await _fetch(x.next, playlists)
}