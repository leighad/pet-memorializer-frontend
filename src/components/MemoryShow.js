import React from 'react'

const MemoryShow = (props) => {
    console.log(props)
    let memoryId = parseInt(props.match.params.memoryId)
    // debugger 
    // let memory = props.memories[props.match.params.memoryId - 1]
    let memory = props.memories.find(memory => memory.id === memoryId)
    // let memory = props.memories.filter(memory =>  memory.id == props.match.params.id)[0]



    return (
        <div>
            <h3>
                { memory && `${memory.title}` }
            </h3>
            <h4>
                { memory && `${memory.description}` }
            </h4>
            <hr/>
        </div>
    )
}

export default MemoryShow;