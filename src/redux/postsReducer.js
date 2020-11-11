import {CREATE_POST, FETCH_POST} from "./types";

const ininitialState = {
    posts: [],
    fetchedPosts: []
}
export const postReducer = (state = ininitialState,action) => {
    switch (action.type){
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([action.payload])}
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }

}