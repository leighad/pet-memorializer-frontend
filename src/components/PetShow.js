import React from 'react'

const PetShow = (props) => {

    let pet = props.pets[props.match.params.id - 1]

    return (
        <li>
            { pet ? `${pet.name} the ${pet.kind}` : null }
        </li>
    )
}

export default PetShow;