import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");  //코드를 딱 한번만 실행(API를 호출하거나 어떤 중요한 일을 할 때)하고 다시는 실행하지 않게 하는 방법
  useEffect(() => {
    console.log("CALL THE API.....");
  }, []);
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;