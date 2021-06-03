import { Switch, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import Navigation from "./components/templates/Navigation";
function App() {
  return (
    <>
      <Navbar />
      <Navigation />
    </>
  );
}

export default App;
