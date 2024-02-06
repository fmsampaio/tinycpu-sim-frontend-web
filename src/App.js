import styles from './App.module.css';
import { useEffect, useState } from 'react';
import InstructionMemory from './Components/InstructionMemory';
import DataMemory from './Components/DataMemory'

function App() {

  const [instMem, setInstMem] = useState( [] )
  const [dataMem, setDataMem] = useState( [] )
  
  useEffect( () => {
    setDataMem([
      {address : 0, data : 0}, 
      {address : 1, data : 0}, 
      {address : 2, data : 0}, 
      {address : 3, data : 0}, 
      {address : 4, data : 0}, 
      {address : 5, data : 0}, 
      {address : 6, data : 0}, 
      {address : 7, data : 0}, 
      {address : 8, data : 0}, 
      {address : 9, data : 0}, 
      {address : 10, data : 0}, 
      {address : 11, data : 0}, 
      {address : 12, data : 0}, 
      {address : 13, data : 0}, 
      {address : 14, data : 0}, 
      {address : 15, data : 0}
    ])

    setInstMem([
      {pcIsHere: true , address : 0 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 1 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 2 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 3 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 4 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 5 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 6 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 7 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 8 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 9 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 10 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 11 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 12 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 13 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 14 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}},
      {pcIsHere: false, address : 15 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : -1, hex : ""}}    ])
  }, []
  )

  function updateInstMem(address, instruction) {
    var updatedInstMem = []
    for (let i = 0; i < 16; i++) {
      if(i !== address) {
        updatedInstMem.push(instMem[i])
      }
      else {
        updatedInstMem.push(instruction)
      }
    }
    setInstMem(updatedInstMem)
    console.log(instMem)
  }

  function updateDataMem(address, data) {
    var updatedDataMem = []
    for (let i = 0; i < 16; i++) {
      if(i !== address) {
        updatedDataMem.push(dataMem[i])
      }
      else {
        updatedDataMem.push(data)
      }
    }
    setDataMem(updatedDataMem)
    console.log(dataMem)
  }

  return (
    <div className = {styles.container}>
      <InstructionMemory memoryData = {instMem} updateMem = {updateInstMem} />
      <DataMemory memoryData = {dataMem} updateMem = {updateDataMem} />
    </div>

  );
}

export default App;
