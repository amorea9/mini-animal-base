import { useState } from "react";
import { cleanTheData } from "./cleanData";
const animals = cleanTheData();
import Animal from "./components/Animal";

function App() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("name");
  const [star, setStar] = useState("☆");
  let filteredList = animals;

  if (filter) {
    filteredList = animals.filter((animal) => animal.type === filter);
  }
  if (filter === "all") {
    filteredList = animals;
  }

  filteredList.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }
    return 0;
  });

  // function getStar(e, star) {
  //   console.log(e.target.name);

  //   const newStar = "⭐";
  //   setStar(animals.forEach((animal) => (animal.star = newStar)));
  //   console.log(`${e.target.name} gets a ${star}`);
  // }
  // function assignStar(e, animal) {
  //   animals.forEach((animal) => {
  //     if (e.target.name === animal.name) {
  //       animal.star = "⭐";
  //     }
  //   });
  //   getStar();
  // }

  function getStar(animal, prevStar) {
    animals.forEach((animal) => {
      setStar((prevStar) => (prevStar = "⭐"));
    });
    if (prevStar === "⭐") {
      prevStar = !prevStar;
    }

    console.log(star);
  }

  function sayHi(animal) {
    console.log(animal);
  }

  return (
    <>
      <fieldset>
        <legend>Filter</legend>
        <button className={filter === "all" ? "active" : null} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={filter === "dog" ? "active" : null} onClick={() => setFilter("dog")}>
          Dog
        </button>
        <button className={filter === "cat" ? "active" : null} onClick={() => setFilter("cat")}>
          Cat
        </button>
        <button className={filter === "horse" ? "active" : null} onClick={() => setFilter("horse")}>
          Horse
        </button>
        <button className={filter === "dragon" ? "active" : null} onClick={() => setFilter("dragon")}>
          Dragon
        </button>
      </fieldset>
      <fieldset>
        <legend>Sort</legend>
        <button className={sort === "name" ? "active" : null} onClick={() => setSort("name")}>
          Name
        </button>
        <button className={sort === "type" ? "active" : null} onClick={() => setSort("type")}>
          Type
        </button>
        <button className={sort === "age" ? "active" : null} onClick={() => setSort("age")}>
          Age
        </button>
        <button className={sort === "description" ? "active" : null} onClick={() => setSort("description")}>
          Description
        </button>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Favourite ☆</th>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th>Description</th>
            <th>Greeting</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((ani) => {
            return <Animal star={star} {...ani} getStar={getStar} sayHi={sayHi} key={ani.name} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
