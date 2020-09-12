import React from 'react'
import { connect } from 'react-redux'
import { addMemory } from '../actions/addMemory'

class MemoryInput extends React.Component {

    state = {
        title: '',
        date: '',
        description: '',
        image: '',
        favorite: 'no'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMemory(this.state, this.props.pet.id)
        this.setState({
            title: '',
            date: '',
            description: '',
            image: '',
            favorite: 'no'
        })
    }

    render() {
        return (
            <div>
                <h3>Please fill out memory details here: </h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/><br/><br/>
                    <label>Date: </label>
                    <input type='text' name='date' value={this.state.date} onChange={this.handleChange}/><br/><br/>
                    <label>Description: </label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/><br/><br/>
                    <label>Image: </label>
                    <input type='text' name='image' value={this.state.image} onChange={this.handleChange}/><br/><br/>
                    <label>Favorite? </label>
                    {/* <input type='text' name='favorite' value={this.state.favorite} onChange={this.handleChange}/><br/><br/> */}
                    <input type="checkbox" id="favoriteYes" name="favorite" value={this.state.favorite}/>
                    <label for="favoriteYes">Yes</label>
                    <input type="checkbox" id="favoriteNo" name="favorite" value={this.state.favorite}/>
                    <label for="favoriteNo">No</label><br/><br/>                   
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}


export default connect(null, { addMemory })(MemoryInput);