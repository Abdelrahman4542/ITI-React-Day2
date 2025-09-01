// App.jsx
import Products from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Product System</h1>
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;