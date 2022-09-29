const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
})

export default async function handler(req, res) {

    let d = await (await fetch("https://api.deezer.com/user/4919615022/playlists", { agent })).json()

    await res.status(500).send(d.data)
}