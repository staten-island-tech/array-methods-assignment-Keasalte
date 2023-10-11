 const serv = [
    {
        name: "Artoria",
        moves: ["Excalibur", "Immortality"],
        title: "Once and Future King",
        rating: "A"
    },
    {
        name: "Gilgamesh",
        moves: ["Gate of Babylon", "Clairvoyance"],
        title: "King of Heroes",
        rating: "S"
    },
    {
        name: "Archer",
        moves: ["Forgery", "Unlimited Blade Works"],
        title: "EMIYA",
        rating: "A"
    },
    {
        name: "Cu Chuliann",
        moves: ["Gae bolg", "Revive"],
        title: "Blue Spearman of the Wind",
        rating: "B"
    },
]

serv.forEach((names) => console.log(names.name));
serv.forEach((move) => {console.log(move.name); move.moves.forEach((special) => console.log(special))});

const title = serv.filter((score) => score.rating === "B" );
console.log(title);