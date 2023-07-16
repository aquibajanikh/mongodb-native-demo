const learnersData = [
  { learner: "John Doe", subject: "Math", score: 85 },
  { learner: "Jane Smith", subject: "English", score: 92 },
  { learner: "David Johnson", subject: "Science", score: 78 },
  { learner: "Emily Wilson", subject: "History", score: 91 },
  { learner: "Michael Lee", subject: "Math", score: 76 },
  { learner: "Sarah Brown", subject: "Physics", score: 88 },
  { learner: "Daniel Davis", subject: "Math", score: 90 },
  { learner: "Olivia Taylor", subject: "English", score: 85 },
  { learner: "William Anderson", subject: "Geography", score: 82 },
  { learner: "Sophia Martinez", subject: "Math", score: 95 }
];

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';
const dbName = 'learners';
const collectionName = 'grades';

const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert documents
const insertResult1 = await collection.insertMany(learnersData);
console.log("Inserted Count:", insertResult1.insertedCount);

    // Insert a document
    const newGrade = { learner: 'John Doe', subject: 'Math', score: 85 };
    const insertResult = await collection.insertOne(newGrade);
    console.log('Inserted ID:', insertResult.insertedId);

    // Find all documents with projection
    const findResult = await collection.find({}, { projection: { learner: 1, score: 1, _id: 0 } }).toArray();
    console.log('All Grades:', findResult);

    // Update a document
    const filter = { _id: ObjectId(insertResult.insertedId) };
    const update = { $set: { score: 90 } };
    const updateResult = await collection.updateOne(filter, update);
    console.log('Modified Count:', updateResult.modifiedCount);

    // Delete a document
    const deleteResult = await collection.deleteOne(filter);
    console.log('Deleted Count:', deleteResult.deletedCount);
 
    client.close();
