import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
import "./App.css";

function App(){
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Mis violetas"}/>
        </div>
      );
}

export default App;
