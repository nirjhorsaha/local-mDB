/*
7. Remove the skill with the name "Kotlin" from the skills array.
*/
// db.practiceDB.find({
//     "skills.name": 'KOTLIN'
// }).project({ skills: 1 })

// db.practiceDB.updateMany({}, {
//     $pull: {
//         'skills.name': 'KOTLIN'
//     }
// })

db.practiceDB.updateMany(
    {},
    {
        $pull: {
            skills: { name: "Kotlin" },
        },
    },
);
