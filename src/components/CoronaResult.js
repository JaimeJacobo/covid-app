import React from "react"

const CoronaResult = ({info, searchedName}) => {

  const input = searchedName

  const renderCountries = ()=>{
    if(info){
      return (
        <>
          <h1>{info.country}</h1>
          <ul>
            <li>Confirmed Cases : {info.confirmed}</li>
            <li>Recovered Cases : {info.recovered}</li>
            <li>Total Population : {info.population}</li> 
          </ul>
        </>
      )
    } else {
      return (<p>There has been an error searching for {input}</p>)
    }
  }


    return <div>{renderCountries()}</div>
}

export default CoronaResult