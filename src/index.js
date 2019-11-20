import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  //react says we have to define render
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error Message: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

