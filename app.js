
/*  const array1 = ['1', '2', '3', '4', '5', ];
 array1.forEach((element) => console.log(element));
  */

 /* const ages = [32, 33, 16, 40];

 const adult = ages.filter(value => value >= 18); */

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
serv.forEach((move) => move.forEach(special) => console.log(special));