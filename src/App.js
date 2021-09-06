import "./App.css";
import Users from "./components/Users";
import Card from "./UI/Card";
import BasicTable from "./components/BasicTable";
import Data from "./components/Data";
const DUMMY_USERS = [
  {
    id: "1",
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: "2",
    name: "Ervin Howell",
    username: "Antonette",
  },
  {
    id: "3",
    name: "Clementine Bauch",
    username: "Samantha",
  },
];
function App() {
  return (
    <section>
      <Card>
        <BasicTable />
        <Data />
      </Card>
    </section>
  );
}

export default App;
