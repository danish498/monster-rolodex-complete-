// import { Component } from "react";

import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.components";

import "./App.css";
import { render } from "@testing-library/react";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monnsters, setMonsters] = useState([]);
  const [filterMonsteres, setFilterMonsters] = useState(monnsters);

  // console.log("Render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilterMonsteres = monnsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newfilterMonsteres);
  }, [monnsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="Search-Box-Monsters"
        onSearchHandler={onSearchChange}
        placeholder="Search Monster"
      />

      {<CardList monnesters={filterMonsteres} />}
    </div>
  );
};

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monnsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monnsters: users };
//         })
//       );
//   }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };

//   render() {
//     const { monnsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsteres = this.state.monnsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="Search-Box-Monsters"
//           onSearchHandler={onSearchChange}
//           placeholder="Search Monster"
//         />
//         <CardList monnesters={filterMonsteres} />
//       </div>
//     );
//   }
// }

export default App;
