export default (state = [], action) => {
    
    switch (action.type) {

        case 'select_library':

            if (state.indexOf(action.payload) == -1) {
                return [...state, action.payload];
            }

            const newState = state.slice(0);

            newState.splice(state.indexOf(action.payload), 1);

            return newState;
        
        default:
            return state;

    }

};