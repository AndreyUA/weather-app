import { combineReducers } from "redux";
import { informIsError, informIsLoading, ip, weather } from "./reducers";

export default combineReducers({
  informIsError,
  informIsLoading,
  ip,
  weather,
});
