import { FETCH_USER } from '../actions/types';
// updates value and creates new piece of state and updates in the redux components
export default function (state = null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;    
        default:
            return state;    
    }
}
