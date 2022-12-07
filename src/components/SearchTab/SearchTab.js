import { Fragment, useState } from "react";
import classes from "./SearchTab.module.css";

const SearchTab = (props) => {
  const [enteredName,setEnteredName]=useState("");

  const inputChangeHandler=(event)=>{
    setEnteredName(event.target.value);
  }

  const sendPokeName = (event) => {
    event.preventDefault();
    props.onBusqueda(enteredName);
    setEnteredName("");
  };

  return (
    <form onSubmit={sendPokeName} className={classes.main}>
      <input onChange={inputChangeHandler} placeholder="some pokemon" value={enteredName} className={classes.input} />
      <button className={classes.button}>Search</button>
    </form>
  );
};

export default SearchTab;
