import React from 'react'
import { Link } from 'react-router-dom'

const Memories = (props) => {

    return (
        <div>
        <h4>Memories: </h4>
            {props.memories && props.memories.map(memory => 
                <li key={memory.id}>
                    <Link to={`/pets/${memory.pet_id}/memories/${memory.id}`}>{memory.title}</Link>
                </li> )}
        </div>
    )
}

export default Memories;