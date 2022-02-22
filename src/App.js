import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5, contactsData.length)
  );

  function addRandomContact(remainingContacts) {
    //get random number and remove based on index
    let copyArray = [...remainingContacts];
    let randomIndex = Math.floor(Math.random() * copyArray.length);

    //array of what we removed
    let randomItem = copyArray.splice(randomIndex, 1)[0];

    let outPutArray = [...contacts, randomItem];

    setContacts(outPutArray);
    setRemainingContacts(copyArray);
  }

  function sortByPopularity(contacts) {
    let copyArray = [...contacts];
    let sortedArray = copyArray.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedArray);
  }

  function sortByName(contacts) {
    let copyArray = [...contacts];
    let sortedArray = copyArray.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    setContacts(sortedArray);
  }

  function deleteItem(itemid) {
    let copyArray = [...contacts];

    const filteredItems = copyArray.filter(function (item) {
      return item.id !== itemid;
    });

    setContacts(filteredItems);
  }

  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tbody>
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} className="imageTable"></img>
                </td>
                <td>
                  <h4>{contact.name}</h4>
                </td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button
                    onClick={() => deleteItem(contact.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button onClick={() => addRandomContact(contactsData)}>
        Add Random Contact
      </button>
      <button onClick={() => sortByPopularity(contactsData)}>
        Sort by popularity
      </button>
      <button onClick={() => sortByName(contactsData)}>Sort by name</button>
    </div>
  );
}

export default App;
