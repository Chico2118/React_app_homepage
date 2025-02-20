import React from "react";
import "./App.css"; // Import the CSS for styling

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <h1>Welcome to My Home Page</h1>
        <p>Name: Shivam Jani</p>
        <p>Email: shivam21jani@gmail.com</p>
        <p>Phone: 9265*****</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Chico2118"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
