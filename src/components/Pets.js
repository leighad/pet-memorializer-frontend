import React from 'react'

const Pets = (props) => {

    return (
        <div>
            {props.pets.map(pet => <li key={pet.id}>{pet.name} the {pet.kind}</li>)}
        </div>
    )
}

export default Pets;