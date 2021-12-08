
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Dailyword from "./components/Dailyword/Dailyword"


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Dailyword />
      <Main />
    </div>
  );
}

export default App;
