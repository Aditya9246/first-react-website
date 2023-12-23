import React from 'react';

function App() {
  // Function to handle button click
  const handleButtonClick = () => {
    alert('Button Clicked!');
    // Add any other actions you want to perform on button click
  };
  return (
    <div>
      <header>
        <h1>Welcome to My React Website</h1>
        <button onClick={handleButtonClick}>Click me</button>
      </header>
      <main>
        <p>This is a basic example of a React website. You can customize and add more components as needed.</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My React Website</p>
      </footer>
    </div>
  );
}

export default App;
