export default function petReducer(state = {pets: []}, action) {

    switch (action.type) {
        case 'FETCH_PETS':
            return { pets: action.payload } 
            
        case 'ADD_PET':
            return {...state, pets: [...state.pets, action.payload]}

        default:
            return state;
    }
}