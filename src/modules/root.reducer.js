import { combineReducers } from 'redux';
import api from './home/home.reducer';

export default combineReducers({
    api: api,
})