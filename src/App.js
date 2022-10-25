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
          <h1 class="Greeting">Welcome to the Baby Name Generator!</h1>
          <p class="intro">Just click for Boy names or Girl names to get started!</p>
          <div class="HomeButtons">
            <button class="home_button" id="boy_home_button" onClick={this.goToBoysPage}>Boys</button>
            <button class="home_button" id="girl_home_button" onClick={this.goToGirlsPage}>Girls</button>
          </div>
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
    endpoint = endpoint + "&popular_only=true";
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
      listItems.push(<li class="list_item" key={this.state.newData[i]}>{this.state.newData[i]}</li>);
    }
    if (listItems.length === 0) {
      listItems.push(<li class="list_item">Names will appear here!</li>);
    }
    return (
        <div className="App">
          <h1 class="title">Boy Names</h1>
          <div class="page_buttons">
            <button class="page_button" id="home_home_button" onClick={this.goToHomePage}>Home</button>
            <button class="page_button" id="girl_home_button" onClick={this.goToGirlsPage}>Girls</button>
            <button class="page_button" id="boy_home_button" onClick={this.getNames}>Get Names</button>
          </div>
          <ul class="list_names" id="boy_list">{listItems}</ul>
        </div>
      );
  }
}

class GirlsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: {"name": "names will appear here!"}
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToBoysPage = this.goToBoysPage.bind(this);
    this.getNames = this.getNames.bind(this);
  }
  
  getNames(event) {
    event.preventDefault();
    var gender = 'girl';
    var endpoint = 'https://api.api-ninjas.com/v1/babynames?gender=' + gender;
    endpoint = endpoint + "&popular_only=false";
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
      listItems.push(<li class="list_item" key={this.state.newData[i]}>{this.state.newData[i]}</li>);
    }
    if (listItems.length === 0) {
      listItems.push(<li class="list_item">Names will appear here!</li>);
    }
    return (
        <div className="App">
          <h1 class='title'>Girl Names</h1>
          <div class="page_buttons">
            <button class="page_button" id="home_home_button" onClick={this.goToHomePage}>Home</button>
            <button class="page_button" id="boy_home_button" onClick={this.goToBoysPage}>Boys</button>
            <button class="page_button" id="girl_home_button" onClick={this.getNames}>Get Names</button>
          </div>
          <ul class="list_names" id="girl_list">{listItems}</ul>
        </div>
      );
  }
}
export default BoysPage;
