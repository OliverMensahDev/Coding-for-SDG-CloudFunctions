const { MongoClient } = require('mongodb');

const DB_URL = process.env['DB_URL'];
const dbInstance = new MongoClient(DB_URL);

async function getParticipants() {
    await dbInstance.connect();
    let participants = await dbInstance.db('Coding-for-SDG').collection('Participants').find().toArray();

    return {
        "body": participants
    }
}

exports.main = getParticipants;