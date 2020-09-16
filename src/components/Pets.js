import React from 'react'
import { Link } from 'react-router-dom'

const Pets = (props) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <h2>My Pets: </h2>
            {/* {props.pets && props.pets.map(pet =>  */}
            {props.pets.map(pet => 
                <li key={pet.id}>
                    <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
                </li> )}
        </div>
    )
}

export default Pets;