/*
4. Find documents where the person has skills in both "JavaScript" and "Java."
*/

db.practiceDB
    .find({
        "skills.name": {
            $all: ["JAVASCRIPT", "JAVA"],
        },
    })
    .project({ skills: 1 });


// db.practiceDB.find({
//     $and: [
//         { 'skills.name': 'JAVASCRIPT' },
//         { 'skills.name': 'JAVA' }
//     ]
// }).project({ skills: 1 })