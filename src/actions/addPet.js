export const addPet = (formData) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/pets', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(pet => {
            dispatch({type: 'ADD_PET', payload: pet})
            return pet
        })
    }
}