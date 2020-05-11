import { combineReducers } from "redux";
import { informIsError, informIsLoading, ip, weather, lang } from "./reducers";

export default combineReducers({
  informIsError,
  informIsLoading,
  ip,
  weather,
  lang
});
