import React from 'react'

const PetDetails = (props) => {

    console.log('pet detail props are', props)
    console.log('props.pet is', props.pet)

    return (
        <div>
            { props.pet && props.pet.born ? `was born on ${props.pet.born}` : null }<br/>
            { props.pet && props.pet.passed ? `crossed the rainbow bridge ${props.pet.passed}` : null }<br/>
            { props.pet && props.pet.age ? `was ${props.pet.age}` : null }<br/>
            { props.pet && props.pet.bio ? `${props.pet.bio}` : null }<br/>
        </div>
    )
}

export default PetDetails;