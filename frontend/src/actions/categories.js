import * as API from '../utils/api';
import { GET_CATEGORIES } from '../utils/consts';

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
    API.getCategories()
      .then(categories => dispatch(getCategories(categories)))
  )

// export const fetchCategories = () => {
//     return dispatch => {
//       return API.getCategories()
//         .then(categories => dispatch(getCategories(categories)))
//     }
//   }