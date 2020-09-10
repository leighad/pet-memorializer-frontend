import React from 'react'

const PetShow = (props) => {

    return (
        <li>
            {props.pet.name} the {props.pet.kind}
        </li>
    )
}

export default PetShow;