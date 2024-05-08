import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PlantForm = () => {
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newPlant, setPlant] = useState({
    id: 4,
    name: "",
    kingdom: "",
    clade: "",
    order: "",
    family: "",
    subfamily: "",
    genus: "",
  });

  const handleNameChange = (event) => {
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPlant({ ...newPlant, name: event.target.value });
  };

  const handleKingdomChange = (event) => {
    setPlant({ ...newPlant, kingdom: event.target.value });
  };

  const handleCladeChange = (event) => {
    setPlant({ ...newPlant, clade: event.target.value });
  };

  const handleOrderChange = (event) => {
    setPlant({ ...newPlant, order: event.target.value });
  };

  const handleFamilyChange = (event) => {
    setPlant({ ...newPlant, family: event.target.value });
  };

  const handleSubfamilyChange = (event) => {
    setPlant({ ...newPlant, subfamily: event.target.value });
  };

  const handleGenusChange = (event) => {
    setPlant({ ...newPlant, genus: event.target.value });
  };

  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_PLANT", payload: newPlant });
    //updates the next plant to have a new id
    setPlant({
      id: newPlant.id + 1,
      name: "",
      kingdom: "",
      clade: "",
      order: "",
      family: "",
      subfamily: "",
      genus: "",
    });
  };
  return (
    <div>
      <h3>This is the form</h3>
      <pre>{JSON.stringify(newPlant)}</pre>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          placeholder="Name"
          value={newPlant.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Kingdom"
          value={newPlant.kingdom}
          onChange={handleKingdomChange}
        />
        <input
          type="text"
          placeholder="Clade"
          value={newPlant.clade}
          onChange={handleCladeChange}
        />
        <input
          type="text"
          placeholder="Order"
          value={newPlant.order}
          onChange={handleOrderChange}
        />
        <input
          type="text"
          placeholder="Family"
          value={newPlant.family}
          onChange={handleFamilyChange}
        />
        <input
          type="text"
          placeholder="Subfamily"
          value={newPlant.subfamily}
          onChange={handleSubfamilyChange}
        />
        <input
          type="text"
          placeholder="Genus"
          value={newPlant.genus}
          onChange={handleGenusChange}
        />
        <input type="submit" value="Add New Plant" />
      </form>
    </div>
  );
};

export default PlantForm;
