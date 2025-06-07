import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import { Suspense } from "react";

const bottlesPromise = fetch("./bottles.json").then((res) => res.json());

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Loading</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
