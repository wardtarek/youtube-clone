import "./App.css";
import { BrowserRouter } from "react-router-dom";

import DarkModeContext from "./context/DarkModeContext";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <DarkModeContext>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </DarkModeContext>
  );
}

export default App;
