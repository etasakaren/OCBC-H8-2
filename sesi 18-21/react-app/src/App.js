// using component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import PersonInfo from './components/PersonInfo';
import FetchComponent from './components/FetchComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "Session 19 - React JS"
    }
  }

  changeTitle = (event) => {
    console.log(event)
    this.setState({
      title: "Session 18 - React JS",
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="App-header" >
          <img src={logo}
            className="App-logo"
            alt="logo" />
          <h2 > {this.state.title} </h2>
          <PersonInfo></PersonInfo>
          <p>from index.js = {this.props.score}</p>
          <button className="App-link" onClick={(e) => this.changeTitle(e)}>Change Title</button>
          <FetchComponent></FetchComponent>
        </div>
      </div>
    );
  }
}
export default App;

App.propTypes = {
  score: PropTypes.bool //in console.log
}
// export class App extends Component {

//   constructor(){
//     super()
//     this.state={
//       title: "Welcome to React"
//     }
//   }
//   render() {
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <h2>{this.state.title}</h2>
//         </div>
//         <p className="App-intro">
//           Saya belajar dengan tekun supaya bisa menjadi website developer yang hebat.
//         </p>
//       </div>
//     );
//   }
// }

//using function

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }