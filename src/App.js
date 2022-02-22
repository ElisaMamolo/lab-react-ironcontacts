import logo from "./logo.svg";
import "./App.css";
import contactsData from "./contacts.json";
function App() {
  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactsData.map((contact) => {
          console.log(contact);
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
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
