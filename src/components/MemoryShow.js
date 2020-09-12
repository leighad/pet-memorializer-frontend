import React from 'react'
import MemoriesContainer from '../containers/MemoriesContainer'

const MemoryShow = (props) => {

    return (
        <div>
            <h3>
                { props.memory && `${props.memory.title}` } { props.memory && `${props.memory.date}` }
            </h3>
            <h4>
                { props.memory && `${props.memory.description}` }
            </h4>
        </div>
    )
}

export default MemoryShow;