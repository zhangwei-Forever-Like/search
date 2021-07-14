import React, { Component } from 'react'
// import { NavLink, Route } from 'react-router-dom'
// import About from './components/About/About'
// import Home from './components/Home/Home'
import Hello from './Hello/Hello'
import './App.css'
import List from './components/List/List'

export default class App extends Component {
  state={
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }

  // saveUsers=(users)=>{
  //   this.setState({users})
  // }
  updateAppState=(stateObj)=>{
     this.setState(stateObj)
  }
  render() {
    return (
      <div>
        <Hello updateAppState={this.updateAppState}/>
        <List {...this.state}/>
        {/* <NavLink to="/about" className="about">About</NavLink>
        <NavLink to="/home" className="home">Home</NavLink>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} /> */}
      </div>
    )
  }
}


