import React from 'react'

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

    render() {
        return (
            <div>
                <form>
                <label>Pet's name: </label>
                <input type='text' value={this.state.name} name='name'/>
                <label>Pet type: </label>
                <input type='text' value={this.state.kind} name='kind'/>
                <label>Pet gender: </label>
                <input type='text' value={this.state.gender} name='gender'/>
                <label>Pet's age: </label>
                <input type='text' value={this.state.age} name='age'/>
                <label>When was pet born?: </label>
                <input type='text' value={this.state.born} name='born'/>
                <label>When did pet cross the rainbow bridge?: </label>
                <input type='text' value={this.state.passed} name='passed'/>
                <label>Pet's bio: </label>
                <input type='text' value={this.state.bio} name='bio'/>
                <label>Choose a quote for your pet: </label>
                <input type='text' value={this.state.quote} name='quote'/>
                <label>Pet's image: </label>
                <input type='text' value={this.state.image} name='image'/>
                </form>
            </div>
        )
    }

}

export default PetInput;