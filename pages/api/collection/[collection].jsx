// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Mongo = require("../../../mongo")
const { ObjectId } = require('mongodb');

const db = Mongo.db("batikankutluer-com");

export default async function handler(req, res) {
    await Mongo.connect();

    switch (req.method) {
        case 'GET':
            await handleGET(req, res);
            break;

        case 'POST':
            await handlePOST(req, res);
            break;
        case 'DELETE':
            await handleDELETE(req, res);
            break;
    }
}

async function whitelist() {
    let whitelistCol = await db.collection("whitelist-collection")
    return (await whitelistCol.find({}).toArray()).map(x => x.collection)
}

async function handleGET(req, res) {
    let { id: _id, collection } = req.query;

    if ((await whitelist()).find(col => col === collection));
    else return res.status(404).send("Collection not found");

    const col = db.collection(collection);

    res.send(!!_id ? (await col.findOne({ _id: ObjectId(_id) })) : (await col.find({}).toArray()));
}

async function handlePOST(req, res) {
    let { token, collection } = req.query;
    let { title, context } = JSON.parse(req.body);

    if (token === process.env.PASS) {
        const col = db.collection(collection);

        if (!title || !context) return res.send("Title and context are required");

        const output = await col.insertOne(
            {
                title: title,
                context: context,
            }
        );

        return res.status(200).send(output);
    }

    res.status(500).send("Restricted.")
}

async function handleDELETE(req, res) {
    let { token, id, collection } = req.query;

    if (token === process.env.PASS) {
        const col = db.collection(collection);

        if (!id) return res.send("Id required.");

        return col.findOneAndDelete({ _id: ObjectId(id) }).then(output => {
            res.status(200).send(output);
        }).catch(err => {
            res.status(404).send("Entry not found.");
        });


    }

    res.status(500).send("Restricted.")
}