import React from 'react';
import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom'
import HomeShow from './components/HomeShow'
import TankieShow from './components/TankieShow'
import CloudShow from './components/CloudShow'
import PetsContainer from './containers/PetsContainer'
import Pets from './components/Pets'
import PetInput from './components/PetInput'
import MemoriesContainer from './containers/MemoriesContainer';

// import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Pet Memorializer</h1>
          <h2>a place to chronicle special memories of your pets</h2><hr/>
        </div>

        <div>
          <HomeShow />
        </div>

        <div>
          <div className='link-menu' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
            <NavLink exact activeClassName='active' to='/'>Home</NavLink><br/><br/>
            <NavLink exact activeClassName='active' to='/pets'>My Pets</NavLink><br/><br/>
            <NavLink exact activeClassName='active' to='/pets/new'>Create A Pet</NavLink>
          </div><br/>
          {/* <Route path="/" component={TankieShow}/> */}
        </div>
        
        {/* <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-around',
            }}>
          <CloudShow />
        </div> */}

        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
          <TankieShow />
        </div>
        
        <div>
          <PetsContainer />
        </div>
      </div>
    );
  }
}

export default connect()(App);
