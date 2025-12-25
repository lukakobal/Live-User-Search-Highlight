import { useState } from "react";
import "./styles.css";

const users = ["Luka", "Mark", "Ana", "Petra", "Miha", "Barbara", "Janez"];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => {
          const parts = user.split(new RegExp(`(${search})`, "i"));

          return (
            <li key={index}>
              {parts.map((part, i) =>
                part.toLowerCase() === search.toLowerCase() ? (
                  <span key={i} className="highlight">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
