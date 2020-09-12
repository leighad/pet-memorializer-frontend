import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import MemoryInput from '../components/MemoryInput'
import MemoryShow from '../components/MemoryShow'
import Memories from '../components/Memories'

class MemoriesContainer extends React.Component {

    render() {
        return (
            <div>
                <MemoryInput /><br/>
                <MemoryShow memory={this.props.pet && this.props.pet.memory_id}/>
                <Memories memories={this.props.pet && this.props.pet.memories}/>
            </div>
        )
    }
}

export default MemoriesContainer;

// <Switch>
// <Route path='/pets/new' component={PetInput}/>
// <Route path='/pets/:id' render={(routerProps) => <PetShow { ...routerProps } pets={this.props.pets} /> }/>
// <Route path='/pets' render={(routerProps) => <Pets { ...routerProps } pets={this.props.pets} /> }/>
// </Switch>