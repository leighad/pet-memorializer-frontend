import React from 'react';
import { connect } from 'react-redux'
import PetsContainer from './containers/PetsContainer'

// import './App.css';

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchPets()
  // }

  render() {
    return (
      <div className="App">
        {/* App Component  */}
        <div className="App-Header">
          <h1>Pet Memorializer</h1>
          <h2>a place to chronicle special memories of your pets</h2><hr/>
        </div>
        <PetsContainer />
      </div>
    );
  }
}


export default connect()(App);
