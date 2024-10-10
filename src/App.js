import Layout from './components/Layout';
import Home from './components/Home';
import Mission from './components/Mission';
import CoffeeOptions from './components/CoffeeOptions';
import './App.css';

function App() {
  return (
    <div className="">
      <Layout>
        <Home/>
        <Mission/>
        <CoffeeOptions/>
      </Layout>
    </div>
  );
}

export default App;