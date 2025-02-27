import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import personsService from "./services/personsService";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "awaissss", number: "32111111111" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personsService.getAll().then((allPersons) => {
      console.log("all data", allPersons);
      if (allPersons) {
        setPersons(allPersons);
      }
    });
  }, []);

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const filteredPerson = useMemo(() => {
    return persons.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personsService.create(newPerson);
    // const isDuplicate = persons.find(
    //   (person) => person.name === newPerson.name
    // );

    // if (!isDuplicate) {
    //   setPersons(persons.concat(newPerson));
    // } else {
    //   alert(`${newPerson.name}  is already in PhoneBook `);
    // }
  };

  return (
    <div>
      <h3>Search Phone number</h3>
      <input
        type="text"
        placeholder="Search by phone"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          phone number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>

      <ul>
        {persons.map((per) => (
          <li key={uuidv4()}>
            {per.name}-{per.number}
            <button style={{ color: "blue" }} type="submit">
              delete
            </button>
          </li>
        ))}
      </ul>

      {/* <div>
        <h1 style={{ listStyle: "none", padding: 0 }}>
          {filteredPerson.length > 0 ? (
            filteredPerson.map((item) => <li key={item.name}>{item.name}</li>)
          ) : (
            <li>No results found</li>
          )}
        </h1>
      </div> */}
    </div>
  );
};

export default App;
