const animals = [
  {
    fullname: "Mandu the amazing cat",
    age: 9,
  },
  {
    fullname: "Mia the black cat",
    age: 9,
  },
  {
    fullname: "Leeloo the growing dog",
    age: 1,
  },
  {
    fullname: "Toothless the trained dragon",
    age: 14,
  },
  {
    fullname: "ScoobyDoo the wondering dog",
    age: 58,
  },
  {
    fullname: "Horsey the horsing horse",
    age: 10,
  },
];

export function cleanTheData() {
  const animalsMapped = animals.map((animal) => {
    const [name, , description, type] = animal.fullname.split(" ");
    return {
      name: name,
      description: description,
      type: type,
      age: animal.age,
    };
  });
  return animalsMapped;
}
