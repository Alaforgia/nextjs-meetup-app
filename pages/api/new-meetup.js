// api folder must be named api, and must be in pages folder
// /api/new-meetup

// this requires mongoDB account. npm i mongodb for driver.
import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = MongoClient.connect("mongodv+srv://[username-here]:<password> rest of connection string");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
