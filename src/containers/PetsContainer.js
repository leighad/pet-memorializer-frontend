import React from 'react' 
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchPets } from '../actions/fetchPets'
import PetInput from '../components/PetInput'
import PetShow from '../components/PetShow'
import Pets from '../components/Pets'

class PetsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPets()
    }

    render() {

        return (
            <div>
                <Route path='/pets/new' component={PetInput}/>
                <Route path='/pets/:id' render={(routerProps) => <PetShow { ...routerProps } pets={this.props.pets} /> }/>
                <Route exact path='/pets' render={(routerProps) => <Pets { ...routerProps } pets={this.props.pets} /> }/>
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