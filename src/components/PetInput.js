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
        event.preventDefault()
        this.props.addPet(this.state).then(pet => this.props.history.push(`/pets/${pet.id}`))
        // does not call "addPet", but rather a dispatcher that can dispatch the return value of addPet for you
        // tries to send the return value of the addPet action creator to the reducer, by passing that return value into dispatch
        // thunk will check it right before it's passed into the reducer. if it's a function, it will call it and pass in dispatch,
        // to be used inside that function to manually dispatch an action object to the reducer to update the store
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
                    <label>Your pet's name (required): </label>
                    <input type='text' name='name' value={this.state.name} placeholder="nicknames too!" onChange={this.handleChange}/><br/><br/>
                    <label>Pet type (required): </label>
                    <input type='text' name='kind' value={this.state.kind} placeholder="dog, cat, bird, fish, etc." onChange={this.handleChange}/><br/><br/>
                    <label>Pet gender: </label>
                    <select name='gender' value={this.state.gender} onChange={this.handleChange}>
                        <option>female</option>
                        <option>male</option>
                    </select><br/><br/>
                    <label>Pet's age: </label>
                    <input type='text' name='age' value={this.state.age} placeholder="months or years, etc." onChange={this.handleChange}/><br/><br/>
                    <label>When was your pet born? </label>
                    <input type='text' name='born' value={this.state.born} placeholder="it's okay to guess" onChange={this.handleChange}/><br/><br/>
                    <label>When did your pet cross the rainbow bridge? </label>
                    <input type='text' name='passed' value={this.state.passed} placeholder="it's okay to guess" onChange={this.handleChange}/><br/><br/>
                    <label>Pet's bio: </label>
                    <input type='text' name='bio' value={this.state.bio} placeholder="tell us about your pet" onChange={this.handleChange}/><br/><br/>
                    {/* <label>Choose a quote for your pet: </label>
                    <input type='text' name='quote' value={this.state.quote} onChange={this.handleChange}/><br/><br/>
                    <label>Pet's image: </label>
                    <input type='text' name='image' value={this.state.image} onChange={this.handleChange}/><br/><br/> */}
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

const connectorFn = connect(null, { addPet })

const componentToBeExported = connectorFn(PetInput);

export default componentToBeExported