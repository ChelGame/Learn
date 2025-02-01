function getSortedNumericFields(obj) {
    let result = [];
    
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result.push(key);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            result.push(...getSortedNumericFields(obj[key]));
        }
    }
    
    return result.sort((a, b) => b.localeCompare(a));
}

const example = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7,
    details: {
        age: 25,
        stats: {
            height: 180,
            weight: 75,
            scores: {
                math: 90,
                physics: 85
            }
        },
        experience: 3
    }
};

console.log(getSortedNumericFields(example));
