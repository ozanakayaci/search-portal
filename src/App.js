import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.js";
import ListPage from "./components/ListPage.js";
import AddLinkPage from "./components/AddLinkPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="addlink" element={<AddLinkPage />} />
        <Route path="listpage">
          <Route path=":word" element={<ListPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
