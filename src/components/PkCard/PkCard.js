import { useEffect, useState } from "react";
import TypeList from "../TypeList/TypeList";
import "./PkCard.css";

const PkCard = (props) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${props.name}`;

  const [pok, setPok] = useState();
  const [loaded, setLoaded] = useState(false);

  const [shiny, setShiny] = useState(false);

  let sparkle = " ";

  const IsShiny = () => {
    let n = Math.floor(Math.random() * 100);
    if (n == 1) {
      setShiny(true);
    }
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((pokemon) => setPok(pokemon))
      .then(() => IsShiny())
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, []);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.onGetName(pok.name);
  };
  return (
    <div>
      {loaded ? (
        <div
          className={
            `pkcard ${pok.types[0].type.name} ${shiny ? "shiny" : ""}`
          }
          onClick={toTop}
        >
          <span className={"numero"}>{pok.id}</span>
          <div className={"palabras"}>
            <h3 className={"name"}>{pok.name}</h3>
            <TypeList types={pok.types} />
          </div>
          <div className={"pokimg"}>
            {!shiny ? (
              <img src={pok.sprites.other.home.front_default} />
            ) : (
              <img src={pok.sprites.other.home.front_shiny} />
            )}
          </div>
        </div>
      ) : (
        <div>
          <img src="../../assets/pikachu.gif" />
        </div>
      )}
    </div>
  );
};

export default PkCard;
