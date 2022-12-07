import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import PkCard from "../PkCard/PkCard";
import classes from "./TestingApi.module.css";

const TestingApi = (props) => {
  const limit = props.region.limit;
  const skip = props.region.skip;
  // {console.log(`start:${start} end:${end}`)}
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${skip}`;
  // const URL = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
  const { data, isPending, error } = useFetch(URL);

  const getName = (name) => {
    props.onBusqueda(name);
  };

  return (
    // <div>{isPending ? <h1>loading</h1> : <h3>{JSON.stringify(data)}</h3>}</div>
    <div className={classes.main}>
      {isPending ? (
        <h1>loading</h1>
      ) : (
        data.results.map((pokemon) => {
          return (
            <PkCard
              key={pokemon.name}
              name={pokemon.name}
              onGetName={getName}
            />
          );
        })
      )}
    </div>
  );

  //   const [pokemon, setPokemon] = useState(null);

  //   useEffect(() => {
  //     GetData();
  //   }, []);

  //   const URL = "https://pokeapi.co/api/v2/pokemon";

  //   const GetData = async () => {
  //     let data = await fetch(URL);
  //     let pokemonJson = await data.json();
  //     setPokemon(pokemonJson);
  //   };

  //   return (
  //     <div>
  //       {pokemon != null
  //         ? pokemon.results.map((pokemon) => {
  //             return <div key={pokemon.name}>{pokemon.name}</div>;
  //           })
  //         : <h1>😱</h1>}
  //     </div>
  //   );
};

export default TestingApi;
