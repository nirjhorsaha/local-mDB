/*
7. Remove the skill with the name "Kotlin" from the skills array.
*/
// db.test.find({
//     "skills.name": 'KOTLIN'
// }).project({ skills: 1 })

// db.test.updateMany({}, {
//     $pull: {
//         'skills.name': 'KOTLIN'
//     }
// })


db.persons.updateMany(
    {},
    {
        $pull:
        {
            skills:
                { name: "Kotlin" }
        }
    }
)