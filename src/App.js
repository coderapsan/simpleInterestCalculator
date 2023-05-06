import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./App.css"

function App(){
  // const si=0;
  // function calculateSI(){
  //     const p= document.getElementById("#p")
  //     const t= document.getElementById("#t")
  //     const r= document.getElementById("#r")
  //     const si= (p*t*r)/100
  //     return (<h1> {si} </h1>)
  const [p, setP]=React.useState(0)
  const [t, setT]=React.useState(0)
  const [r, setR]=React.useState(0)
  const [si,setSi]= React.useState(0)
  const siCalculator=()=>{
    setSi((p*t*r)/100)
  }


  
  return (
    <div >
      <nav className='navbar'>
        <h1> Simple Interest Calculator </h1>

      </nav>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(event)=>setP(event.target.value)} label="Principle" variant="outlined" />
      <TextField onChange={(event)=>setT(event.target.value)} label="Time" variant="outlined" />
      <TextField onChange={(event)=>setR(event.target.value)} label="Rate" variant="outlined" />
     
    </Box>
    <button className='buttonStyle' onClick={siCalculator} > Calculate </button>

    <h1> Result : {si}  </h1>
     
    </div>
  )
    }



 


export default App;
