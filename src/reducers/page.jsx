import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
} from '../actions/page/constants/PageConstants'

const initialState = {
  year: 2016,
  photos: [],
  fetching: false,
}

export default function page( state = initialState, action ) {

  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        fetching: true,
        year: action.payload,
      }

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        fetching: false,
      }

    default:
      return state;
  }

}