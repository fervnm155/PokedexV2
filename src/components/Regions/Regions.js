import classes from "./Regions.module.css";

const Regions = (props) => {
  const setCurrentRegion = (event) => {
    event.preventDefault();
    switch (event.target.value) {
      case "1":
        props.onSelectedRegion({
          skip: 0,
          limit: 151,
        });
        break;
      case "2":
        props.onSelectedRegion({
          skip: 151,
          limit: 100,
        });
        break;
      case "3":
        props.onSelectedRegion({
          skip: 251,
          limit: 135,
        });
        break;
      case "4":
        props.onSelectedRegion({
          skip: 386,
          limit: 107,
        });
        break;
      case "5":
        props.onSelectedRegion({
          skip: 493,
          limit: 156,
        });
        break;
      case "6":
        props.onSelectedRegion({
          skip: 649,
          limit: 72,
        });
        break;
      case "7":
        props.onSelectedRegion({
          skip: 721,
          limit: 88,
        });
        break;
      case "8":
        props.onSelectedRegion({
          skip: 809,
          limit: 89,
        });
        break;
    }
  };
  return (
    <div className={classes.Region}>
      <button className={classes.RegionButton}  value="1" onClick={setCurrentRegion}>
        1° Generacion
      </button>
      <button className={classes.RegionButton}  value="2" onClick={setCurrentRegion}>
        2° Generacion
      </button>
      <button className={classes.RegionButton}  value="3" onClick={setCurrentRegion}>
        3° Generacion
      </button>
      <button className={classes.RegionButton}  value="4" onClick={setCurrentRegion}>
        4° Generacion
      </button>
      <button className={classes.RegionButton}  value="5" onClick={setCurrentRegion}>
        5° Generacion
      </button>
      <button className={classes.RegionButton}  value="6" onClick={setCurrentRegion}>
        6° Generacion
      </button>
      <button className={classes.RegionButton}  value="7" onClick={setCurrentRegion}>
        7° Generacion
      </button>
      <button className={classes.RegionButton} value="8" onClick={setCurrentRegion}>
        8° Generacion
      </button>
    </div>
  );
};

export default Regions;
