import * as API from '../utils/api';
import { GET_POSTS } from '../utils/consts';

export const fetchPosts = (category) => dispatch => {
    console.log(API.getPosts(category))
    API.getPosts(category)
        .then(posts => dispatch({
            type: GET_POSTS,
            posts
        }))
    }

    // export const fetchPosts = (category) => dispatch => (
    //     API.getPosts(category)
    //         .then(posts => dispatch({
    //             type: GET_POSTS,
    //             posts
    //         }))
    //     )