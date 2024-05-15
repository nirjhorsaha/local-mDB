/*
    2. Retrieve the names and email addresses of individuals who are active (`isActive: true`) and 
    have a favorite fruit of "banana".
*/

db.massive.aggregate()
    .match(
        {
            isActive: true,
            favoriteFruit: 'banana'
        })
    .project({ name: 1, email: 1 })
    
// db.massive.aggregate([
//     {
//         $match: {
//             isActive: true,
//             favoriteFruit: 'banana'
//         }
//     },
//     {
//         $project: { name: 1, email: 1 }
//     }
// ])