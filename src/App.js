import "./styles.css";
import ReactDOM from "react-dom";

let value = [];
let counter = 0;
const useState = (val) => {
  if (value.length === counter) {
    let obj = {};
    obj.state = val;
    function setState(updatedValue) {
      obj.state = updatedValue;
      counter = 0;
      ReactDOM.render(<App />, document.getElementById("root"));
    }
    obj.setState = setState;
    value[counter] = obj;
  }
  const currentState = value[counter];
  counter++;
  return [currentState.state, currentState.setState];
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [dec, setDec] = useState(10);
  const updateHandler = () => {
    let val = counter + 1;
    setCounter(val);
  };

  const decrementHandler = () => {
    let value = dec - 1;
    setDec(value);
  };
  return (
    <div className="App">
      {counter + " " + dec}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={updateHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}
