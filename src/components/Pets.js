import React from 'react'
import { Route, Link } from 'react-router-dom'
import PetShow from './PetShow'

const Pets = (props) => {

    return (
        <div>
            <h2>My Pets: </h2>
            {props.pets.map(pet => 
                <li key={pet.id}>
                    <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                </li> )}
        </div>
    )
}

export default Pets;