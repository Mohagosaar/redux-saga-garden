import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

// this startingPlantArray should eventually be removed

function* fetchPlants() {
  try {
    const plants = yield axios.get("/api/plants");
    yield put({ type: "GET_PLANTS", payload: plants.data });
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

function* addPlant(action) {
  try {
    yield axios.post("/api/plants", action.payload);
    yield put({ type: "FETCH_PLANTS" });
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

function* deletePlant(action) {
  try {
    yield axios.delete(`/api/plants/${action.payload}`);
    yield put({ type: "FETCH_PLANTS" });
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_PLANTS", fetchPlants);
  yield takeEvery("ADD_PLANT", addPlant);
  yield takeEvery("DELETE_PLANT", deletePlant);
}

const plantList = (state = [], action) => {
  if (action.type === "GET_PLANTS") {
    return action.payload;
  }
  return state;
};

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

sagaMiddleware.run(rootSaga);

export default store;
