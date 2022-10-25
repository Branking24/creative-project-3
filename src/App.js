import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.goToBoysPage = this.goToBoysPage.bind(this);
    this.goToGirlsPage = this.goToGirlsPage.bind(this);
  }
  
  goToBoysPage() {
    root.render(
      <React.StrictMode>
        <BoysPage />
      </React.StrictMode>
    );
  }
  
  goToGirlsPage() {
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
    super(props);
    this.state = {
      newData: {}
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToGirlsPage = this.goToGirlsPage.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  
  getNames(event) {
    event.preventDefault();
    var gender = 'boy';
    var endpoint = 'https://api.api-ninjas.com/v1/babynames?gender=' + gender;
    axios({
      url: endpoint,
      method: "GET",
      headers: {
        'X-Api-Key': 'xXTuAXAn0aMvPSfdLqvK7Q==opL44ur28to0z61w'
      },
      contentType: 'application/json'
    })
    .then(response => {
      let data = response.data;
      this.setState({newData: data});
      console.log(data);
    })
    .catch(error => {
      this.setState({names:[]});
      console.log(error);
    });

  }
  
  goToHomePage() {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  
  goToGirlsPage() {
    root.render(
      <React.StrictMode>
        <GirlsPage />
      </React.StrictMode>
    );
  }
  
  render() {
    const listItems = [];
    for (let i = 0; i < this.state.newData.length; i++) {
      listItems.push(<li key={this.state.newData[i]}>{this.state.newData[i]}</li>);
    }
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
    super(props);
    this.state = {
      newData: {}
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToBoysPage = this.goToBoysPage.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  
  getNames(event) {
    event.preventDefault();
    var gender = 'girl';
    var endpoint = 'https://api.api-ninjas.com/v1/babynames?gender=' + gender;
    axios({
      url: endpoint,
      method: "GET",
      headers: {
        'X-Api-Key': 'xXTuAXAn0aMvPSfdLqvK7Q==opL44ur28to0z61w'
      },
      contentType: 'application/json'
    })
    .then(response => {
      let data = response.data;
      this.setState({newData: data});
      console.log(data);
    })
    .catch(error => {
      this.setState({names:[]});
      console.log(error);
    });
  }
  
  goToHomePage() {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  
  goToBoysPage() {
    root.render(
      <React.StrictMode>
        <BoysPage />
      </React.StrictMode>
    );
  }
  
  render() {
    const listItems = [];
    for (let i = 0; i < this.state.newData.length; i++) {
      listItems.push(<li key={this.state.newData[i]}>{this.state.newData[i]}</li>);
    }
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
