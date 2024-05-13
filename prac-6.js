/*
6. Add a new language "Spanish" to the list of languages spoken by the person.
*/

// db.test.find({
//     languages: {
//         $type: "array"
//     }
// }).project({ languages: 1 })

db.test.updateMany({},
    {
        $addToSet:
            { languages: 'Spanish' }
    }
)


// db.test.find({
//     languages: "Spanish"
// }).project({languages:1})