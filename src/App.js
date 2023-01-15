import "./App.css";
import HeaderSearch from "./components/headerSearch/HeaderSearch";
import Users from "./components/headerUsers/Users";
import LeftNav from "./components/leftNav/LeftNav";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <LeftNav />
      <HeaderSearch />
      <Users />
      <User />
    </div>
  );
}

export default App;
