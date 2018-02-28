import { GET_POSTS } from '../utils/consts';

const posts = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: action.posts
            }
        default:
            return state;
    }
}

export default posts;