/*
5. Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com". 
    The skill is {"name": "Python", "level": "Beginner","isLearning": true}
*/

// db.practiceDB.find({
//     email: "omirfin2@i2i.jp"
// })

db.practiceDB.updateOne(
    {
        email: "omirfin2@i2i.jp",
    },
    {
        $addToSet: {
            skills: {
                name: "Python",
                level: "Beginner",
                isLearning: true,
            },
        },
    },
);
