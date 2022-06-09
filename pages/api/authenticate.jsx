export default function handler(req, res) {
    let { token } = req.query;

    if (token === process.env.PASS) res.status(200).send(true);
    else res.status(500).send("Restricted.")
}