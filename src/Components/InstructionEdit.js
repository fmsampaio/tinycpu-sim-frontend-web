import styles from "./InstructionEdit.module.css"
import { parseAssembly } from "../Core/TinyCPUFunctions"
import { useState } from "react"

function InstructionEdit( {instruction, updateMem} ) {

    const [instState, setInstState] = useState(instruction)

    const handleFocus = (event) => event.target.select();
    
    function handleAssemblyInput(e) {
        console.log("Evento de perda de foco")
        var newInstData = parseAssembly(e.target.value)

        var newInst = {
            pcIsHere : instState.pcIsHere,
            address : instState.address,
            assembly : e.target.value.toUpperCase(),
            inst : newInstData
        }

        e.target.value = e.target.value.toUpperCase()

        setInstState(newInst)
        updateMem(newInst.address, newInst)
    }

    return (
        
        <div className = {styles.container}>
            <div className = {`${styles.item} ${styles.pc_is_here}`}>
                {instState.pcIsHere ? "*" : "-"}
            </div>
            <div className = {`${styles.item} ${styles.address}`}>
                {instState.address}
            </div>
            <div>
                { (instState.inst.is_valid | instState.assembly === "") ? 
                    <input 
                        type= "text"
                        defaultValue= {instState.assembly}        
                        className = {styles.item}
                        onBlur = {handleAssemblyInput}
                        onFocus = {handleFocus}
                    />
                :
                    <input 
                        type= "text"
                        defaultValue= {instState.assembly}        
                        className = {`${styles.item} ${styles.not_valid}`}
                        onBlur = {handleAssemblyInput}
                        onFocus = {handleFocus}
                    />
                }
            </div>
            <div className={styles.item}>
                {instState.inst.hex}
            </div>
            <div className={styles.item}>
                {instState.inst.bin}
            </div>
            
        </div>
        
    )

}

//<input type="text" defaultValue={instruction.assembly}></input>
//<span>{instruction.hex}</span>
/*
*/

export default InstructionEdit