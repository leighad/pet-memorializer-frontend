import React from 'react'
// import { Redirect } from 'react-router-dom'
import PetDetails from './PetDetails'
import MemoriesContainer from '../containers/MemoriesContainer'

const PetShow = (props) => {

    let petId = parseInt(props.match.params.id)
    let pet = props.pets.find(pet => pet.id === petId)
    // let pet = props.pets[props.match.params.id - 1]

    console.log('props pets', props.pets)
    console.log('params are', props.match.params)
    console.log('inside pet show', pet)

    // let pet = props.pets.filter(pet =>  pet.id == props.match.params.id)[0]
    // may want to use this to match for id vs index

    return (
        <div>
            <h2>
                {/* {pet ? null : <Redirect to='/pets' />} */}
                { pet ? `${pet.name} the ${pet.kind}` : 'There is no pet at this address, please try again.' } 
            </h2>
            <div>
                <PetDetails pet={pet} /><br/><hr/>
                <MemoriesContainer pet={pet} />
            </div>
        </div>
    )
}

export default PetShow;