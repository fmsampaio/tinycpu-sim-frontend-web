import './App.css';
import { useEffect, useState } from 'react';
import InstructionMemory from './Components/InstructionMemory';

function App() {

  const [instMem, setInstMem] = useState( [] )
  
  useEffect( () => {
    setInstMem([
      {pcIsHere: true , address : 0 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 1 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 2 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 3 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 4 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 5 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 6 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 7 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 8 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 9 ,  assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 10 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 11 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 12 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 13 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 14 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 15 , assembly : "", inst : {fields : {}, bin : "", dec : -1, hex : ""}}    ])
  }, []
  )

  function updateInstMem(address, instruction) {
    let updatedInstMem = []
    for (let i = 0; i < 16; i++) {
      if(i != address) {
        updatedInstMem.push(instMem[i])
      }
      else {
        updatedInstMem.push(instruction)
      }
    }
    console.log("Updating original state...")
    console.log(address)
    console.log(instruction)
    console.log(updatedInstMem)
    
    setInstMem(updatedInstMem)
    
  }

  return (
    <>
      <InstructionMemory memoryData = {instMem} updateMem = {updateInstMem} />
    </>
  );
}

export default App;
