export function informIsError(state = false, action) {
  switch (action.type) {
    case "INFORM_HAS_ERRORED":
      return action.isError;
    default:
      return state;
  }
}

export function informIsLoading(state = false, action) {
  switch (action.type) {
    case "INFORM_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

export function ip(state = {}, action) {
  switch (action.type) {
    case "INFORM_FETCH_DATA_SUCCESS":
      console.log(action.ip);
      return action.ip;
    default:
      return state;
  }
}

export function weather(state = {}, action) {
  switch (action.type) {
    case "WEATHER_FETCH_DATA_SUCCESS":
      console.log(action.weather);
      return action.weather;
    default:
      return state;
  }
}

export function lang(state = "ru", action) {
  switch (action.type) {
    case "CHANGING_LANGUAGE":
      return action.lang;
    default:
      return state;
  }
}
