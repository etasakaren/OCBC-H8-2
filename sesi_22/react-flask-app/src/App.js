import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import stylesJS from './AppStyles.js';
import styled from 'styled-components';

function App() {
  const [placeholder, setPlaceholder] = useState('Hi');
  // const [paragraphStyle, setParagraphStyle] = useState({
  //   backgroundColor: "black"
  // })

  // const [paragraphClass, setParagraphClass]=useState("Paragraph Black")
  // const [paragraphClass, setParagraphClass]=useState(styles.small)
  // const [paragraphClass, setParagraphClass]=useState(stylesJS.small)

  const PBlack = styled.p`
    font-size: 10pt;
    color: black;
  `

  const PGray = styled.p`
    font-size: 30pt;
    color: gray;
  `

  const [stateIsChanged, setStateIsChanged]=useState(false)
  
  useEffect(()=>{
    fetch('/hello/').then(res=>res.json()).then(data=>{
      setPlaceholder(data.result);
    });
  },[]);

  // const changeStyle = () => setParagraphStyle({
  //   backgroundColor: "gray"
  // })

  // const changeStyle = () => setParagraphClass("Paragraph Gray")
  // const changeStyle = () => setParagraphClass(styles.large)
  // const changeStyle = () => setParagraphClass(stylesJS.large)
  const changeStyle = () => setStateIsChanged(stateIsChanged)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <p className={paragraphClass}>Flask says '{placeholder}'</p> */}
        {/* <p style={paragraphStyle}>Flask says '{placeholder}'</p> */}
        {/* <p style={paragraphClass}>Flask says '{placeholder}'</p> */}
        {/* <p style={stateIsChanged?(<PGray>{placeholder}</PGray>):(<PBlack>{placeholder}</PBlack>)} >
                {placeholder}
        </p> */}
        <button onClick={changeStyle}>Change text</button>
      </header>
    </div>
  );
}

export default App;
