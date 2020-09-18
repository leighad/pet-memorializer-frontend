export default function petReducer(state = {pets: []}, action) {

    const FETCH_PETS = 'FETCH_PETS';
    const ADD_PET = 'ADD_PET';
    const ADD_MEMORY = 'ADD_MEMORY';

    switch (action.type) {
        case FETCH_PETS:
            return { pets: action.payload } 
            
        case ADD_PET:
            return { ...state, pets: [...state.pets, action.payload]}

        case ADD_MEMORY:
            let pets = state.pets.map(pet => {
                if (pet.id === action.payload.id) {
                    return action.payload
                } else {
                    return pet 
                }
            })
            return { ...state, pets: pets }

        default:
            return state;
    }
}