let bobsFollowers = [
    "Luke",
    "Joe",
    "Rick",
    "Paul"
];

let hannahsFollowers = [
    "Susan",
    "Marge",
    "Rick",
    "Paul"
]

for (let i = 0; i < 4; i++) {
    if (bobsFollowers == "Rick" || bobsFollowers == "Paul") {
        console.log("mutual follower");
    } else {
    console.log(bobsFollowers[i]);
    console.log(hannahsFollowers[i])
}
}