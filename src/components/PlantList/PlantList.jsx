import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PlantList() {
  const dispatch = useDispatch();

  const reduxState = useSelector((store) => store.plantList);

  function deletePlant(id) {
    dispatch({ type: "DELETE_PLANT", payload: id });
  }

  useEffect(() => {
    dispatch({ type: "FETCH_PLANTS" }); // dispatch an action to request the plantList from the API
  }, []);

  return (
    <div>
      <h3>This is the plant list</h3>
      {reduxState.map((plant) => (
        <li key={plant.id}>
          {plant.name}{" "}
          <button onClick={() => deletePlant(plant.id)}>Delete</button>{" "}
        </li>
      ))}
    </div>
  );
}

export default PlantList;
