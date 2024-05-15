/*
    4. Retrieve a list of unique friend names for individuals who have at least 
    one friend, and include only the friends with names starting with the letter "W".
*/

db.massive.aggregate()
    .match({
        friends: {
            $exists: true, $ne: []
        }
    })
    .unwind("$friends")
    .match({ "friends.name": /^W/i })
    .group({ _id: "$friends.name"})
    // .project({_id: '$_id'})
