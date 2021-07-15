import './App.css';
import CoronaResult from './components/CoronaResult'
import { React, useState } from 'react'
import axios from "axios"

function App() {

  const [firstCountry,setFirstCountry] = useState("")
  const [secondCountry,setSecondCountry] = useState("")
  const [infoFirstCountry, setInfoFirstCountry] = useState(false)
  const [infoSecondCountry, setInfoSecondCountry] = useState(false)

  const [renderResult, setRenderResult] = useState(false)

  const clickHandler = () => { 
    axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${firstCountry}`)
      .then((firstCountryData) => {
        axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${secondCountry}`)
          .then((secondCountryData) => {
          setInfoFirstCountry(firstCountryData.data.All)
          setInfoSecondCountry(secondCountryData.data.All)
          setRenderResult(true)
        }) 
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h3>First Country</h3>
      <input onChange={(e)=>setFirstCountry(e.target.value)} />
      <h3>Second Country</h3>
      <input onChange={(e)=>setSecondCountry(e.target.value)} />
      <button className="glow-on-hover" onClick={clickHandler}>Compare</button>
      <div>
      { renderResult && 
        <div>
          <CoronaResult info={infoFirstCountry} searchedName={firstCountry}/>
          <CoronaResult info={infoSecondCountry} searchedName={secondCountry}/>
        </div>
      }
      </div>
    </div>
  );
}

export default App;


// NAMES
// Salvo
// Nat
// Alex
// G
// PALLAVI
// Sasmitha
// Peter
// Victor
// Lorianne

