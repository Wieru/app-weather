import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = 'appid=9dc7d3f2ddd49f1cc011c10930bdcb07'

class App extends Component {

  state = {
    value: '',
    city: '',
    date: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    pressure: '',
    err: false,
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleCitySubmit =(event) => {
    event.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&${APIKey}&units=metric`

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(state => ({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        city: state.value,
      }))
    })
    .catch(err => {
      console.log(err);
      this.setState(prevState =>{
        return {
        err: true,
        city: prevState.value
      }})
    })
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value}
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}


export default App;
