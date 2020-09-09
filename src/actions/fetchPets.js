export function fetchPets() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pets')
        .then(res => res.json())
        .then(pets => dispatch({
            type: 'FETCH_PETS', 
            payload: pets
        }))
    }
}