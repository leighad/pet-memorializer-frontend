import React from 'react'

const MemoryShow = (props) => {

    let memory = props.memories[props.match.params.memory_id - 1]

    return (
        <div>
            <h3>
                { memory && `${memory.title}` } { memory && `${memory.date}` }
            </h3>
            <h4>
                { memory && `${memory.description}` }
            </h4>
        </div>
    )
}

export default MemoryShow;