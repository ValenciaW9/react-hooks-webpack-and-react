function reveal(person, realIdentuty) {
    person.identity = realIdentuty;
}

const spidey ={
    name: "Spidey-Man",
    identity: "Friendly Neighborhood Spider-Man,"
};

reveal(spidey, "Peter Parker");