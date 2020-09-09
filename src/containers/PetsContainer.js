import React from 'react' 
import { connect } from 'react-redux'

import { fetchPets } from '../actions/fetchPets'
import Pets from '../components/Pets'
import PetInput from '../components/PetInput'

class PetsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPets()
    }

    render() {

        return (
            <div>
                <PetInput /><br/><br/>
                <Pets pets={this.props.pets}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.pets 
    }
}

export default connect(mapStateToProps, { fetchPets })(PetsContainer);