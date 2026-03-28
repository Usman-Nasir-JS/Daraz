import './App.css'
import HomeFooter from './components/HomeFooter';
import Hero from './components/Hero';
import MainLayout from './components/MainLayout';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  return (
    
    <>
      <Navbar />  
      <MainLayout>
        <Hero />
        <Products />
      </MainLayout>
      <HomeFooter />
    </>
  );
}

export default App
