import logo from './logo.svg';
import './App.css';
import ContactsList from './components/container/contacts_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactsList></ContactsList>
      </header>
    </div>
  );
}

export default App;
