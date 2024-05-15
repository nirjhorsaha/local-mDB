/*
3. Find all documents where the skill is an empty array.
*/

db.practiceDB.find(
    {
        skills: {
            $size: 0
        }
    }
).project(
    {
        name: 1,
        skills: 1
    }
).sort({ name: 1 })