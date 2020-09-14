import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MemoryInput from '../components/MemoryInput'
import MemoryShow from '../components/MemoryShow'
import Memories from '../components/Memories'

class MemoriesContainer extends React.Component {

    render() {
        console.log('inside memories container', this.props.pet)

        return (
            <div>
                <Memories memories={this.props.pet && this.props.pet.memories}/>
                <Switch>
                    {/* <MemoryShow memory={this.props.pet && this.props.memory_id}/> */}
                    <Route path={'/pets/:petId/memories/:memoryId'} render={(routerProps) => <MemoryShow { ...routerProps } memories={this.props.pet.memories} /> }/>
                </Switch>
                <MemoryInput pet={this.props.pet}/><br/>
            </div>
        )
    }
}

export default MemoriesContainer;