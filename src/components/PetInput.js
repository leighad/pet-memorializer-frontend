import React from 'react'
import { connect } from 'react-redux'
import { addPet } from '../actions/addPet'

class PetInput extends React.Component {

    state = {
        name: '', 
        kind: '',
        gender: 'female',
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
        this.setState({
            name: '', 
            kind: '',
            gender: 'female',
            age: '',
            born: '',
            passed: '',
            bio: '',
            quote: '',
            image: ''
        })
    }

    render() {
        return (
            <div>
            <h2>Please fill out pet details here: </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Your pet's name: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br/><br/>
                    <label>Pet type: </label>
                    <input type='text' name='kind' value={this.state.kind} placeholder='dog, cat, bird, fish, etc.' onChange={this.handleChange}/><br/><br/>
                    <label>Pet gender: </label>
                    <select name='gender' value={this.state.gender} onChange={this.handleChange}>
                        <option>female</option>
                        <option>male</option>
                    </select><br/><br/>
                    {/* <input type='text' name='gender' value={this.state.gender} onChange={this.handleChange}/><br/><br/> */}
                    <label>Pet's age: </label>
                    <input type='text' name='age' value={this.state.age} onChange={this.handleChange}/><br/><br/>
                    <label>When was your pet born? </label>
                    <input type='text' name='born' value={this.state.born} placeholder="it's okay to guess!" onChange={this.handleChange}/><br/><br/>
                    <label>When did your pet cross the rainbow bridge? </label>
                    <input type='text' name='passed' value={this.state.passed} onChange={this.handleChange}/><br/><br/>
                    <label>Pet's bio: </label>
                    <input type='text' name='bio' value={this.state.bio} placeholder='tell us about your pet' onChange={this.handleChange}/><br/><br/>
                    <label>Choose a quote for your pet: </label>
                    <input type='text' name='quote' value={this.state.quote} onChange={this.handleChange}/><br/><br/>
                    <label>Pet's image: </label>
                    <input type='text' name='image' value={this.state.image} onChange={this.handleChange}/><br/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default connect(null, { addPet })(PetInput);