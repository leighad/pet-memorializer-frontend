import React from 'react'
import MemoryInput from '../components/MemoryInput'
import Memories from '../components/Memories'

class MemoriesContainer extends React.Component {

    render() {
        return (
            <div>
                <MemoryInput /><br/>
                <Memories memories={this.props.pet && this.props.pet.memories}/>
            </div>
        )
    }
}

export default MemoriesContainer;