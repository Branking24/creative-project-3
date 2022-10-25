import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.goToBoysPage = this.goToBoysPage.bind(this);
    this.goToGirlsPage = this.goToGirlsPage.bind(this);
  }
  
  goToBoysPage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BoysPage />
      </React.StrictMode>
    );
  }
  
  goToGirlsPage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <GirlsPage />
      </React.StrictMode>
    );
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            
            <button onClick={this.goToBoysPage}>Boys</button>
            <button onClick={this.goToGirlsPage}>Girls</button>
          </header>
        </div> 
      );
  }
}


class BoysPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names:[]
    }
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToGirlsPage = this.goToGirlsPage.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  
  getNames() {
    var gender = 'neutral';
    var url = 'https://api.api-ninjas.com/v1/babynames?gender=' + gender;
    axios.get(url)
    .then(response => {
      
    })
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/babynames?gender=' + gender,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
    this.setState({names:[{"name":"John"}]})
  }
  
  goToHomePage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  
  goToGirlsPage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <GirlsPage />
      </React.StrictMode>
    );
  }
  
  render() {
    const listItems = this.state.names.map((thistask, index) =>
    <li>{thistask.name}</li>);
    return (
        <div>
          <p>Boys</p>
          <button onClick={this.goToHomePage}>Home</button>
          <button onClick={this.goToGirlsPage}>Girls</button>
          <button onClick={this.getNames}>Get Names</button>
          <ul>{listItems}</ul>
        </div>
      );
  }
}

class GirlsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names:[]
    }
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToBoysPage = this.goToBoysPage.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  
  getNames() {
    this.setState({names:[{"name":"John"}]})
  }
  
  goToHomePage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  
  goToBoysPage() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BoysPage />
      </React.StrictMode>
    );
  }
  
  render() {
    const listItems = this.state.names.map((thistask, index) =>
    <li>{thistask.name}</li>);
    return (
        <div>
          <p>Girls</p>
          <button onClick={this.goToHomePage}>Home</button>
          <button onClick={this.goToBoysPage}>Boys</button>
          <button onClick={this.getNames}>Get Names</button>
          <ul>{listItems}</ul>
        </div>
      );
  }
}
export default App;
