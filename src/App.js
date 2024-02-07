import styles from './App.module.css';
import { useEffect, useState } from 'react';
import InstructionMemory from './Components/InstructionMemory';
import DataMemory from './Components/DataMemory'
import RegisterBank from './Components/RegisterBank';
import SimulationControl from './Components/SimulationControl';
import { instructionExecution, instructionFetch, copyAndChangeMemoryPosition, instructionExecutionOnRun } from "./Core/TinyCPUFunctions"


function App() {

  const [instMem, setInstMem] = useState( [] )
  const [dataMem, setDataMem] = useState( [] )
  const [regs, setRegs] = useState( [] )
  const [hltReached, setHltReached] = useState( false )
  const [timeout, setTimeout] = useState ( false )
  
  useEffect( () => {
    resetCpu() 
    resetMemories()   
  }, []
  )

  useEffect( () => {
    console.log("[Effect Data Mem]")
    console.log(dataMem)
  }, [dataMem])

  useEffect( () => {
    console.log("[Effect Inst Mem]")
    console.log(instMem)
  }, [instMem])


  function resetMemories() {
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
      {pcIsHere: true , address : 0 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 1 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 2 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 3 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 4 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 5 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 6 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 7 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 8 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 9 ,  assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 10 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 11 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 12 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 13 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 14 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}},
      {pcIsHere: false, address : 15 , assembly : "", inst : {is_valid : false, fields : {}, bin : "", dec : 0, hex : ""}}    ])
  }

  function resetCpu() {
    setRegs({
      RA : 0,
      RB : 0,
      PC : 0,
      RI : 0,
      RN : 0,
      RZ : 0
    })
    setHltReached(false)
    setTimeout(false)
  }

  function updateInstMem(address, instruction) {
    setInstMem(copyAndChangeMemoryPosition(instMem, address, instruction))
  }

  function updateDataMem(address, data) {
    setDataMem(copyAndChangeMemoryPosition(dataMem, address, data))
  }

  function handleStepBtn() {
    if(!hltReached) {
      const returnInstFetch = instructionFetch( instMem, regs )
      const returnInstExec = instructionExecution( dataMem, returnInstFetch.regs, returnInstFetch.curr_inst, updateDataMem  )

      setRegs(returnInstExec.regs)
      setHltReached(returnInstExec.hlt_reached)
    }
  }

  function handleRunBtn() {
    var returnInstFetch = {}
    var returnInstExec = {}

    var regsTmp = regs
    var dataMemTmp = dataMem
    var hltReachedTmp = hltReached

    var countInstructions = 0

    while(!hltReachedTmp) {
      if(countInstructions > 1000) {
        setTimeout(true)
        break
      }

      returnInstFetch = instructionFetch( instMem, regsTmp )
      returnInstExec = instructionExecutionOnRun( dataMemTmp, returnInstFetch.regs, returnInstFetch.curr_inst  )

      regsTmp = returnInstExec.regs
      dataMemTmp = returnInstExec.data_memory
      hltReachedTmp = returnInstExec.hlt_reached

      countInstructions += 1
    }

    setDataMem(dataMemTmp)
    setRegs(returnInstExec.regs)
    setHltReached(returnInstExec.hlt_reached)
  }

  return (
    <div className = {styles.container}>
      <InstructionMemory memoryData = {instMem} updateMem = {updateInstMem} />
      <DataMemory memoryData = {dataMem} updateMem = {updateDataMem} />
      <RegisterBank regs={regs} />
      <SimulationControl handleStepBtn={handleStepBtn} handleResetBtn={resetCpu} hltReached={hltReached} handleRunBtn={handleRunBtn} timeout={timeout}/>
    </div>

  );
}

export default App;
