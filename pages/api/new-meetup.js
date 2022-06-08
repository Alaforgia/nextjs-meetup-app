// api folder must be named api, and must be in pages folder
// /api/new-meetup

// this requires mongoDB account. npm i mongodb for driver.
import { MongoCLient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect('mongodv+srv://[username-here]:<password> rest of connection string')
  }
}

export default handler;
