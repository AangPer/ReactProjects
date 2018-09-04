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
  render() {
    console.log("debuger");
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
