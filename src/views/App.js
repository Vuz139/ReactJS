import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 * 2 components: class component / function component (function, arrow)
 * JSX
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (VuNguyen) - Cậu bé React
        </p>
        <p>
          Cậu bé bắt đầu
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />

      </header>
    </div>
  );
}

export default App;
