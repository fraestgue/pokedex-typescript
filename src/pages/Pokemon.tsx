import styles from "./pokemon.module.css";
import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { waitFor } from "../utils/utils";
import LoadingScreen from "../components/LoadingScreen";

function Pokemon() {

  const [ pokemon, setPokemon ] = useState<PokemonDetails>();
  const [ isLoading, setIsLoading ] = useState(false)
  
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true)
      await waitFor(500)
      const fetchedPokemon = await fetchPokemon(name as string)
      setPokemon(fetchedPokemon)
      setIsLoading(false)
    }
    getPokemon()
  }, [name])

  if (isLoading || !pokemon) {
    return <LoadingScreen/>
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />{" "}
        Go Back
      </button>

      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{pokemon?.name.toUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Pokemon;
