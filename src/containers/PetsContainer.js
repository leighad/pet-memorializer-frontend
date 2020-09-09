import React from 'react' 
import Pets from '../components/Pets'
import PetInput from '../components/PetInput'

class PetsContainer extends React.Component {

    render() {

        return (
            <div>
                <PetInput />
                <Pets />
            </div>
        )
    }
}

export default PetsContainer;