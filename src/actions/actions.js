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
        console.log(ip);
        dispatch(informFetchDataSuccess(ip));
        
      })
      .catch(() => dispatch(informIsError(true)));
  };
}
