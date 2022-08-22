import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <Header />
      <Main test="BankApp" />
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
