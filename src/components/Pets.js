import React from 'react'
import PetShow from './PetShow'

const Pets = (props) => {

    return (
        <div>
            {/* {props.pets.map(pet => <li key={pet.id}>{pet.name} the {pet.kind}</li>)} */}
            {props.pets.map(pet => 
                <div key={pet.id}><PetShow pet={pet}/></div>)}
        </div>
    )
}

export default Pets;