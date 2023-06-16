import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import linkedInLogo from './assets/linkedin.svg'
import gmailLogo from './assets/gmail.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const state = false
  const text = "null"
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="footer">
          <a  className= "buttonemail" href='https://www.linkedin.com/in/sherman-yan-85847a184/' >
                        LinkedIn
          </a>
      </div>

      <iframe className='figma' width = {1000} height = {1000} allowfullscreen src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmZNYAybmni55Zf7WwU0KTX%2FDJ-App-Prototype%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DwPjCMujzHFEkLLf0-1"></iframe> */}

      <div>
        <h1 className='title'>
          Sherman Yan 
        </h1>
      </div>
        <a className='icons'>
        <a className = 'linkedin' onClick= {() => open("https://www.linkedin.com/in/sherman-yan-85847a184/")}>
          <img src = {linkedInLogo} width={100}/>
        </a>
        <a className = 'gmail' onClick= {() => open("mailto:shermanyanofficial@gmail.com")}>
          <img src = {gmailLogo}width={100}/>
        </a>
        </a>
    <div>
      </div>
    </div>
    )
    }
  




export default App
