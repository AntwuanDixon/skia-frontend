import { ApiPromise } from "@polkadot/api";
import "./App.css";
import MainCard from "./components/MainCard";
import { useEffect, createContext, useReducer } from "react";
import { appReducer, apiReducer, defaultAccount } from "./utils/Reducers"

export const AppContext = createContext<AppContextType>(defaultAccount);
export const ApiContext = createContext<any>("");

function App({ api }: { api: ApiPromise }) {
  const [state, dispatch] = useReducer(appReducer, []);
  const [API, dispatchAPI] = useReducer(apiReducer, []);
  useEffect(() => {
    dispatchAPI({ type: "SET_API", payload: api });
  }, [api]);

  return (
    <ApiContext.Provider value={[API, dispatchAPI]}>
      <AppContext.Provider value={{state, dispatch}}>
        <div className="App">
          <MainCard />
        </div>
      </AppContext.Provider>
    </ApiContext.Provider>
  );
}

export default App;
