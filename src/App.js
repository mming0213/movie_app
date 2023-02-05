import Button from "./Button"
import styles from "./App.modules.css"

function App() {
  return (
    <div>
      <h1 claseeName={styles.title}>Welcom!</h1>
      <Button text="Continue" />
    </div>
  );
}

export default App;