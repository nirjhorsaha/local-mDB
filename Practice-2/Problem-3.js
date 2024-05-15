/*
    3. Find the average age of individuals for each favorite fruit, then sort the 
    results in descending order of average age.
*/

db.massive.aggregate()
    .group(
        {
            _id: "$favoriteFruit",
            avgAge: { $avg: "$age" }
        })
    .sort({ avgAge: -1 })
    
    
// db.massive.aggregate([
//     {
//         $group: {
//             _id: "$favoriteFruit",
//             avgAge: { $avg: "$age" }
//         }
//     },
//     {
//         $sort: {avgAge: -1}
//     }
// ])