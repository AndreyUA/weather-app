//for ip request START

export function informIsError(bool) {
  return {
    type: "INFORM_HAS_ERRORED",
    isError: bool,
  };
}

export function informIsLoading(bool) {
  return {
    type: "INFORM_IS_LOADING",
    isLoading: bool,
  };
}

export function informFetchDataSuccess(ip) {
  return {
    type: "INFORM_FETCH_DATA_SUCCESS",
    ip,
  };
}

export function informFetchData(url) {
  return (dispatch) => {
    dispatch(informIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(informIsLoading(false));

        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((ip) => {
        dispatch(informFetchDataSuccess(ip));
      })
      .catch(() => dispatch(informIsError(true)));
  };
}

//for ip request END

//for weather request START

export function weatherIsError(bool) {
  return {
    type: "WEATHER_HAS_ERRORED",
    isWeatherError: bool,
  };
}

export function weatherIsLoading(bool) {
  return {
    type: "WEATHER_IS_LOADING",
    isWeatherLoading: bool,
  };
}

export function weatherFetchDataSuccess(weather) {
  return {
    type: "WEATHER_FETCH_DATA_SUCCESS",
    weather,
  };
}

export function weatherFetchData(url) {
  return (dispatch) => {
    dispatch(weatherIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(weatherIsLoading(false));

        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        dispatch(weatherFetchDataSuccess(weather.data[0]));
      })
      .catch(() => dispatch(weatherIsError(true)));
  };
}

//for weather request END

//for lang START

export function langDocument(lang) {
  return {
    type: "CHANGING_LANGUAGE",
    lang,
  };
}

//for lang END

//now or day forecast START

export function currentShow(bool) {
  return {
    type: "SHOW_CURRENT",
    currentWeather: bool,
  };
}

//now or day forecast END

//daily START

export function weatherDailyIsError(bool) {
  return {
    type: "WEATHER_DAILY_HAS_ERRORED",
    isError: bool,
  };
}

export function weatherDailyIsLoading(bool) {
  return {
    type: "WEATHER_DAILY_IS_LOADING",
    isLoading: bool,
  };
}

export function weatherDailyFetchDataSuccess(weatherDaily) {
  return {
    type: "WEATHER_DAILY_FETCH_DATA_SUCCESS",
    weatherDaily,
  };
}

export function weatherDailyFetchData(url) {
  return (dispatch) => {
    dispatch(weatherDailyIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(weatherDailyIsLoading(false));

        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((weatherDaily) => {
        dispatch(weatherDailyFetchDataSuccess(weatherDaily.data));
      })
      .catch(() => dispatch(weatherDailyIsError(true)));
  };
}

//daily END
