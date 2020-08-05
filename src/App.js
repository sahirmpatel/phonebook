import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const changeName = (e) => {
    setNewName(e.target.value);
  };
  const personnames = persons.map((person) => person.name);

  const addChange = (event) => {
    event.preventDefault();
    if (personnames.includes(newName)) {
      alert(`${newName} is already in the list`);
    } else {
      const newperson = { name: newName };
      setPersons(persons.concat(newperson));
      setNewName("");
    }
  };
  console.log("the array", persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addChange}>
        <div>
          name: <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name.toLowerCase()}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
