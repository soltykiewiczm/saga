import { createStore } from 'redux';
import rootReducer from './modules/root.reducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}