import { combineReducers } from 'redux';
import { informIsError, informIsLoading, ip } from './reducers';

export default combineReducers({
    informIsError,
    informIsLoading,
    ip
});