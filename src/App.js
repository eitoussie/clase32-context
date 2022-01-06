
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import UserProvider from './store/AppContext';

function App() {
  return (
    <div className="container">
      <UserProvider>
        <Body/>
        <Header/>
      </UserProvider>
    </div>
  );
}

export default App;
