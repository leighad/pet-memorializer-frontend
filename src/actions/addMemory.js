export const addMemory = (memory, petId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/pets/${petId}/memories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memory)
        })
        .then(res => res.json())
        .then(pet => dispatch({ type: 'ADD_MEMORY', payload: pet }))

    }
}