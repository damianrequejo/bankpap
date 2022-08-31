//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  const saludo = "Bienvenido a BankApp";
  
  return (
    <>
      <Header />
      <Main test="BankApp" />
      <ItemListContainer saludo={saludo}/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <ItemDetailContainer/>
      <Footer />
    </>
  );
}

export default App;
