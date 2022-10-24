import './App.css';
import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import PokedexSection from './components/PokedexSection'
import axios from 'axios'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [team, setTeam] = useState([])

  useEffect(() =>{ 
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100000')
    .then((res) =>{
    console.log(res.data.results)
    setAllPokemon(res.data.results)
  })
  },[])

 
  return (
    <div className="App">
      <Header />
      <TeamSection team={team}/>
      <PokedexSection allPokemon={allPokemon} setTeam={setTeam}/>
    
    </div>
  );
}

export default App;
