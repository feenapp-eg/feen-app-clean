import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Feen App 🚀</h1>
      <p>Project is running successfully on Vercel.</p>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "40px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
