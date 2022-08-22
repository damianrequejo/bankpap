//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';



function App() {

  
  
  return (
    <>
      <Header />
      <Main test="BankApp" />
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <Footer />
    </>
  );
}

export default App;
