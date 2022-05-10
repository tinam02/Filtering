import { useState } from "react";
import { Users } from "./users";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul id="list">
        {Users.filter((individual) =>
          individual.first_name.toLowerCase().includes(query)
        ).map((individual) => (
          <li key={individual.id} className="listItem">
            {individual.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
