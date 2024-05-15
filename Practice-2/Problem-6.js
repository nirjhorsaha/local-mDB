/*
    6. Calculate the total balance of individuals for each company and display the company name 
    along with the total balance. Limit the result to show only the top two companies with the 
    highest total balance.
*/

db.massive.aggregate()
    .group({
        _id: "$company",
        totalBalance: {
            $sum: { $toDouble: { $substr: ["$balance", 1, -1] } }
        }
    })
    .sort({ totalBalance: -1 })
    .limit(2)
    
    
// db.massive.aggregate([
//     {
//         $group: {
//             _id: "$company",
//             totalBalance: { $sum: { $toDouble: { $substr: ["$balance", 1, -1] } } }
//         }
//     },
//     {
//         $sort: { totalBalance: -1 }
//     },
//     {
//         $limit: 2
//     }
// ])