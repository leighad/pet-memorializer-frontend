export default function petReducer(state = {pets: []}, action) {

    switch (action.type) {
        case 'FETCH_PETS':
            return { pets: action.payload } 
            
        case 'ADD_PET':
            return { ...state, pets: [...state.pets, action.payload]}

        case 'ADD_MEMORY':
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