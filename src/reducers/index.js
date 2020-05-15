import { combineReducers } from "redux";
import {
  informIsError,
  coordinates,
  weather,
  weatherIsError,
  weatherIsLoading,
  lang,
  current,
  dailyWeather,
} from "./reducers";

export default combineReducers({
  informIsError,
  coordinates,
  weather,
  weatherIsError,
  weatherIsLoading,
  lang,
  current,
  dailyWeather,
});
