
import { useState } from "react";
import "./App.css";

function App() {
  // TODO 1: Create state variable
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO 2: Ternary operator for conditional rendering
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Student</h1>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
