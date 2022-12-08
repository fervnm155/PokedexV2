import { Fragment, useState } from "react";
import classes from "./SearchTab.module.css";
import { useFetch } from "../../Hooks/useFetch";

const SearchTab = (props) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`;
  const { data, isPending, error } = useFetch(URL);

  const [enteredName, setEnteredName] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value.toLowerCase());
  };

  const sendPokeName = (event) => {
    event.preventDefault();
    props.onBusqueda(enteredName);
    setEnteredName("");
  };

  return (
    <Fragment>
      <form onSubmit={sendPokeName} className={classes.main}>
        <input
          list="dl-pkm-name"
          type="text"
          onChange={inputChangeHandler}
          placeholder="some pokemon"
          value={enteredName}
          className={classes.input}
        />
        <button className={classes.button}>Search</button>
      </form>
      <datalist id="dl-pkm-name">
        {data != null
          ? data.results.map((pkm) => {
              return <option key={pkm.name} value={pkm.name} />;
            })
          : null}
      </datalist>
    </Fragment>
  );
};

export default SearchTab;
