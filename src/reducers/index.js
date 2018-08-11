import { combineReducers } from 'redux';
import PhotosReducers from './photos_reducer'

const rootReducer = combineReducers({
    photos: PhotosReducers
});

export default rootReducer;