import "./App.css";
import Mainpage from "./COMPONENTS/Mainpage";
import Navbar from "./COMPONENTS/Navbar";
import { useState, createContext } from "react";
import AuthContext from "./useAuth/context";

function App(props) {
  const [num, setNum] = useState(0);
  const [Amount, setAmount] = useState(0);

  console.log(setNum);

  return (
    <AuthContext.Provider value={{ num, setNum, setAmount, Amount }}>
      <div className="App">
        <Navbar />
        <Mainpage />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
