//import React from 'react';
import { ApiPromise } from "@polkadot/api";
import "./App.css";
import MainCard from "./components/MainCard";


function App({ api }: { api: ApiPromise }) {
  return (
    <div className="App">
      <MainCard api={api}/>
    </div>
  );
}

export default App;
