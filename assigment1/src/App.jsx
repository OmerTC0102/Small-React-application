import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  function toggleProducts() {
    setShowProducts(!showProducts);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Product Dashboard</h1>

      <button onClick={toggleProducts}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <p>Hello, {name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
