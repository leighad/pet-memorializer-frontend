import React from 'react'
import { connect } from 'react-redux'
import { addPet } from '../actions/addPet'

class PetInput extends React.Component {

    state = {
        name: '', 
        kind: '',
        gender: '',
        age: '',
        born: '',
        passed: '',
        bio: '',
        quote: '',
        image: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addPet(this.state)

    }

    render() {
        return (
            <div>
            <h2>Please fill out pet details here: </h2><hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Your pet's name: </label>
                    <input type='text' value={this.state.name} name='name' onChange={this.handleChange}/><br/><br/>
                    <label>Pet type: </label>
                    <input type='text' placeholder='dog, cat, bird, fish, etc.' value={this.state.kind} name='kind' onChange={this.handleChange}/><br/><br/>
                    <label>Pet gender: </label>
                    <input type='text' value={this.state.gender} name='gender' onChange={this.handleChange}/><br/><br/>
                    <label>Pet's age: </label>
                    <input type='text' value={this.state.age} name='age' onChange={this.handleChange}/><br/><br/>
                    <label>When was your pet born? </label>
                    <input type='text' placeholder="it's okay to guess!" value={this.state.born} name='born' onChange={this.handleChange}/><br/><br/>
                    <label>When did your pet cross the rainbow bridge? </label>
                    <input type='text' value={this.state.passed} name='passed' onChange={this.handleChange}/><br/><br/>
                    <label>Pet's bio: </label>
                    <input type='text' placeholder='tell us about your pet' value={this.state.bio} name='bio' onChange={this.handleChange}/><br/><br/>
                    <label>Choose a quote for your pet: </label>
                    <input type='text' value={this.state.quote} name='quote' onChange={this.handleChange}/><br/><br/>
                    <label>Pet's image: </label>
                    <input type='text' value={this.state.image} name='image' onChange={this.handleChange}/><br/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default connect(null, { addPet })(PetInput);