import React, { ChangeEventHandler, useState } from "react";
import { Client, Address } from "./app/interface";
import "./App.css";
import { SearchInput } from "./components/searchInput/index";
function App() {
  const [search, setSearch] = useState("");

  const clients: Client[] = [
    {
      id: "clientA",
      name: "Client A Name",
      address: "addressA",
    },
    {
      id: "clientB",
      name: "Client B Name",
      address: "addressB",
    },
    {
      id: "clientC",
      name: "Client C Name",
      address: "addressB street 34",
    },
  ];

  const addresses: Address[] = [
    {
      id: "addressA",
      street: "123 W St",
      city: "Philadelphia",
      state: "PA",
    },
    {
      id: "addressB",
      street: "456 Pine St",
      city: "Orlando",
      state: "FL",
    },
  ];

  const SearchClient: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const clientList = clients.filter(
    (people) =>
      people.name?.toLowerCase?.().indexOf?.(search.toLowerCase()) !==
        -1 ||
      people.address
        ?.toLowerCase?.()
        .indexOf?.(search.toLowerCase()) !== -1
  );

  console.log(clientList);
  

  return (
    <div className="App">
      <div>
        <SearchInput name="" onChange={SearchClient} />
      </div>
      <div>
        {clientList.map((client) => (
          <ul key={client.id}>
            <li>{client.name}</li>
          </ul>
        ))}
      </div>
      <div>
        {addresses.map((address) => (
          <ul key={address.id}>
            <li>{address.street}</li>
            <li>{address.city}</li>
            <li>{address.state}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
