/*
2. Find documents where the favorite color is either "Maroon" or "Blue."
*/

db.practiceDB
    .find({
        favoutiteColor: {
            $in: ["Maroon", "Blue"],
        },
    })
    .project({ favoutiteColor: 1 })
    .sort({ name: 1 });


// db.practiceDB.find(
//     {
//         $or: [
//             { favoutiteColor: "Maroon" },
//             { favoutiteColor: "Blue" }
//         ]
//     }
// ).project(
//     { favoutiteColor: 1 }
// ).sort({ name: 1 })