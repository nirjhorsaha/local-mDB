/*
    5. Use $facet to separate individuals into two facets based on their age: those below 30 and 
    those above 30. Then, within each facet, bucket the individuals into age ranges 
    (e.g., 20-25, 26-30, etc.) and sort them by age within each bucket.
*/

db.massive.aggregate([
    {
        $facet: {
            'ageBelow30': [
                {
                    $match: { age: { $lt: 30 } }

                },
                {
                    $bucket: {
                        groupBy: '$age',
                        boundaries: [20, 25, 30],
                        default: "age below 30",
                        output: {
                            count: { $sum: 1 },
                            individuals: {
                                $push: { name: '$name', age: '$age' }
                            }
                        }
                    }
                }
            ],
            'ageAbove30': [
                {
                    $match: { age: { $gt: 30 } }
                },
                {
                    $bucket: {
                        groupBy: '$age',
                        boundaries: [30, 35, 40],
                        default: 'age above 30',
                        output: {
                            count: { $sum: 1 },
                            individuals: {
                                $push: {name: '$name', age: '$age'}
                            }
                        }
                    }
                }
            ]
        }
    }

])
