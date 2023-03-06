const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://alex:rs9415315450@alex.txg9pe3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let datadb;
async function run() {
  try {
    await client.connect();
    const db = client.db("poisonbb");
    const collection = db.collection("poisons");
    console.log("connected");

    // Find the first document in the collection
    const all = await collection.find({}).toArray();
    return all;
    // return first;
    // first = JSON.parse(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

(async () => {
  let myData = await run().catch(console.error);
  console.log(myData);
})();
