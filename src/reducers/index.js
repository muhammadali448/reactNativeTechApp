import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import SelectedReducer from './selectedReducer';

const reducers = combineReducers({
    libraries: libraryReducer,
    selectedLibraryId: SelectedReducer
});

export default reducers;