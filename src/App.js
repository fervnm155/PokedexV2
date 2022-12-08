import classes from "./App.module.css";
import TestingApi from "./components/TestingApi/TestingApi";
import SearchTab from "./components/SearchTab/SearchTab";
import Details from "./components/PkDetails/Details";
import { useEffect, useState } from "react";
import Regions from "./components/Regions/Regions";

function App() {
  const [pkName, setPkName] = useState("");
  const [region, setRegion] = useState({ limit: 151, skip: 0 });
  // const [song, setSong] = useState(music);
  // const [isPlaying, setIsPlaying] = useState(music[0]);
  let p = "";
  const Busqueda = (pokeName) => {
    setPkName(pokeName);
  };
  const selectedRegion = (region) => {
    console.log(region);
    setRegion({ limit: region.limit, skip: region.skip });
  };
  return (
    <div className={classes.app}>
      <h1 className={classes.pokedexTitle}>Pokédex</h1>
      <div className={classes.main}>
        <SearchTab onBusqueda={Busqueda} />
        <Regions onSelectedRegion={selectedRegion} />
        <div className={classes.pkList}>
          {pkName != "" ? <Details name={pkName} /> : <h1></h1>}
          {/* {console.log(region)} */}
          <TestingApi onBusqueda={Busqueda} region={region} />
        </div>
      </div>
    </div>
  );
}

export default App;
