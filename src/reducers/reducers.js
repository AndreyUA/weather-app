export function informIsError(state = false, action) {
  switch (action.type) {
    case "INFORM_HAS_ERRORED":
      return action.isError;
    default:
      return state;
  }
}

export function coordinates(state = {}, action) {
  switch (action.type) {
    case "INFORM_COORDINATES_DATA_SUCCESS":
      return action.coordinates;
    default:
      return state;
  }
}

export function weatherIsError(state = false, action) {
  switch (action.type) {
    case "WEATHER_HAS_ERRORED":
      return action.isWeatherError;
    default:
      return state;
  }
}

export function weatherIsLoading(state = false, action) {
  switch (action.type) {
    case "WEATHER_IS_LOADING":
      return action.isWeatherLoading;
    default:
      return state;
  }
}

export function weather(state = {}, action) {
  switch (action.type) {
    case "WEATHER_FETCH_DATA_SUCCESS":
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

export function current(state = true, action) {
  switch (action.type) {
    case "SHOW_CURRENT":
      return action.currentWeather;
    default:
      return state;
  }
}

export function dailyWeather(state = [], action) {
  switch (action.type) {
    case "WEATHER_DAILY_FETCH_DATA_SUCCESS":
      return action.weatherDaily;
    default:
      return state;
  }
}
