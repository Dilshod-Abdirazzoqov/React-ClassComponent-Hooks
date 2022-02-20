import "./App.css";
import "../src/STYLE/style.css";
import Counter from "./components/Counter";
import IncDec from "./components/InDecBtn";
import InForm from "./components/InForm";

function App() {
  return (
    <>
      <div className="App w-50 mx-auto">
        <Counter />
        <br />
        <br />
        <IncDec />
        <hr />
        <InForm />
      </div>
    </>
  );
}

export default App;
