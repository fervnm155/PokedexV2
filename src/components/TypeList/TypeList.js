import "./TypeList.css";

const TypeList = (props) => {
  return (
    <div className="typesBox">
      {props.types.map((type) => (
        <div key={Math.random()}>
          <h2 className={"detailsType" + " " + type.type.name + "Label"}>
            {type.type.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TypeList;
