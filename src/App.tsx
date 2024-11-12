import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';


function App() {
  return (

    
    <div className="app">

      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items />} />
        
        
      </Routes>
      
    </div>
      
    
  );
}

export default App;
