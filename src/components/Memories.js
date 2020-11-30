import React from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

class Memories extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div>
            <label for="search">Search here: </label>
            <input id="search" type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
            <h4>Memories: </h4>
                {this.props.memories && this.props.memories.filter(
                    (m) => m.title.includes(this.state.searchTerm)
                ).map(memory => 
                    <li key={memory.id}>
                        <Link to={`/pets/${memory.pet_id}/memories/${memory.id}`}>{memory.title}</Link><br/>
                        <Counter />
                    </li> )}
            </div>
        )
    }
}


export default Memories;