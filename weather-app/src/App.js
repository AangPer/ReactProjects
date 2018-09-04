import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Oslo,no',
  'Washington DC.,us',
  'Reykjavik,is',
  'Tabasco,mx',
  'Amsterdam,nl',
  'Denver,us',
  'Villahermosa,mx',
  'Ottawa,ca'
];
class App extends Component {
  
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (

      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
