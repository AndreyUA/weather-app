import { combineReducers } from "redux";
import {
  informIsError,
  informIsLoading,
  ip,
  weather,
  weatherIsError,
  weatherIsLoading,
  lang,
  current,
  dailyWeather,
} from "./reducers";

export default combineReducers({
  informIsError,
  informIsLoading,
  ip,
  weather,
  weatherIsError,
  weatherIsLoading,
  lang,
  current,
  dailyWeather,
});
