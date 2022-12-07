import { useEffect, useState } from "react";
import TypeList from "../TypeList/TypeList";

import "./Details.css";

const Details = (props) => {
  const namePkm = props.name;
  const URL = `https://pokeapi.co/api/v2/pokemon/${namePkm}`;
  const [pok, setPok] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((pokemon) => setPok(pokemon))
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, [namePkm]);

  let statAround = (stat) => {
    var a = parseInt(stat / 10) * 10;
    if (a >= 150) {
      return 250;
    }
    if (a >= 110) {
      return 150;
    }
    return a;
  };

  return (
    <div>
      {loaded ? (
        <div>
          <div className="pkCardDetails">
            <div className="detailsImg">
              <img src={pok.sprites.other.home.front_default} alt="pokemon" />
              <img src={pok.sprites.other.home.front_shiny} alt="pokemon" />
            </div>
            <div className="data">
              <h1 className="pkName">{pok.name}</h1>
              <TypeList types={pok.types}/>
              {/* <div className="typesBox">
                {pok.types.map((type) => (
                  <div key={Math.random()}>
                    <h2
                      className={"detailsType" + " " + type.type.name + "Label"}
                    >
                      {type.type.name}
                    </h2>
                  </div>
                ))}
              </div> */}
              <div className="detData">
                <div className="stats">
                  <h2 className="statName">{pok.stats[0].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[0].base_stat)
                    }
                  >
                    {pok.stats[0].base_stat}
                  </h2>
                  <h2 className="statName">{pok.stats[1].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[1].base_stat)
                    }
                  >
                    {pok.stats[1].base_stat}
                  </h2>
                  <h2 className="statName">{pok.stats[2].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[2].base_stat)
                    }
                  >
                    {pok.stats[2].base_stat}
                  </h2>
                  <h2 className="statName">{pok.stats[3].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[3].base_stat)
                    }
                  >
                    {pok.stats[3].base_stat}
                  </h2>
                  <h2 className="statName">{pok.stats[4].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[4].base_stat)
                    }
                  >
                    {pok.stats[4].base_stat}
                  </h2>
                  <h2 className="statName">{pok.stats[5].stat.name}</h2>
                  <h2
                    className={
                      "statValue" +
                      " " +
                      "statUnder" +
                      statAround(pok.stats[5].base_stat)
                    }
                  >
                    {pok.stats[5].base_stat}
                  </h2>
                </div>
                <img
                  className="piplupImg"
                  src={require("../../assets/piplup.gif")}
                  alt="piplup"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src="../../assets/pikachu-run.gif" />
        </div>
      )}
    </div>
  );
};

export default Details;
