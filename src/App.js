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
        <PetsContainer />
      </div>
    );
  }
}


export default connect()(App);
