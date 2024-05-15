/*
    1. Retrieve the count of individuals who are active (isActive: true) for each gender.
*/

db.massive.aggregate()
    .match({ isActive: true })
    .group(
        {
            _id: "$gender", count: { $sum: 1 }
        }
    )
    
    
// db.massive.aggregate([
//     {
//         $match: { isActive: true }
//     },
//     {
//         $group: {
//             _id: "$gender",
//             count: { $sum: 1 }
//         }
//     }

// ])