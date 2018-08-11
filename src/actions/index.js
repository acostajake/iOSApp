import axios from 'axios';
//thunk helps dispatch action when async function completes
import thunk from 'redux-thunk';

export function getPhotos() {
    return (dispatch) => {
        axios.get('http://localhost:3000/photos')
            .then(response => {
                dispatch({
                    type: 'GET_PHOTOS',
                    payload: response.data
                })
            });
    }
}