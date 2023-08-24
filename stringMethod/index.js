function userData(name, age, favoriteNumber) {
    const info = `my name is ${name} and im ${age} years old and my favorite number is ${favoriteNumber}`;
    return info;
}

const user1 = userData("ibrahim", 25, 5);
const user2 = userData("mahmoud", 23, 7);
const user3 = userData("adam", 18, 9);

const users = [user1, user2, user3];

for (var i = 0; i < users.length; i++) {
    const info = users[i];
    const words = info.split(' ');

    for (var b = 0; b < words.length; b++) {
        words[b] = words[b].charAt(0).toUpperCase() + words[b].slice(1);
    }

    users[i] = words.join(' ');
}

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

//2.