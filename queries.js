// Find learners who scored above 80

// const filter = { score: { $gt: 80 } };
// const findResult = await collection.find(filter).toArray();
// console.log('Learners with score above 80:', findResult);


// Find the average score for all learners
// const aggregationResult = await collection.aggregate([
//     { $group: { _id: null, averageScore: { $avg: '$score' } } }
//   ]).toArray();
//   console.log('Average Score:', aggregationResult[0].averageScore);


// Update multiple documents using a filter
// const filter = { subject: 'Math' };
// const update = { $inc: { score: 5 } };
// const updateResult = await collection.updateMany(filter, update);
// console.log('Modified Count:', updateResult.modifiedCount);

// Delete documents with scores below 70:
// const filter = { score: { $lt: 70 } };
// const deleteResult = await collection.deleteMany(filter);
// console.log('Deleted Count:', deleteResult.deletedCount);
