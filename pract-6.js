/*
6. Add a new language "Spanish" to the list of languages spoken by the person.
*/

db.practiceDB.updateMany(
    {},
    {
        $addToSet: { languages: "Spanish" },
    },
);


// db.practiceDB.find({
//     languages: "Spanish"
// }).project({languages:1})