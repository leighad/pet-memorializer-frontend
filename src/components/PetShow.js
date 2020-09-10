import React from 'react'
// import { Redirect } from 'react-router-dom'
import PetDetails from './PetDetails'
import MemoriesContainer from '../containers/MemoriesContainer'

const PetShow = (props) => {

    let pet = props.pets[props.match.params.id - 1]

    return (
        <div>
            <h3>
                {/* {pet ? null : <Redirect to='/pets' />} */}
                { pet ? `${pet.name} the ${pet.kind}` : 'There is no pet at this address, please try again.' } 
            </h3>
            <div>
                <PetDetails pet={pet} /><br/>
                <MemoriesContainer pet={pet} />
            </div>
        </div>
    )
}

export default PetShow;