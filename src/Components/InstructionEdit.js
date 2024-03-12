import styles from "./InstructionEdit.module.css"
import { parseAssembly } from "../Core/TinyCPUFunctions"
import { useEffect, useState } from "react"

function InstructionEdit( {instruction, updateMem, pcIsHere, highlight} ) {

    const [instState, setInstState] = useState(instruction)
    const [instValue, setInstValue] = useState(instruction.assembly)

    useEffect( () => {
        setInstState(instruction)
        setInstValue(instruction.assembly)
    }, [instruction])

    function handleOnChange(e) {
        setInstValue(e.target.value)
    }

    const handleFocus = (event) => event.target.select();
    
    function handleAssemblyInput(e) {
        console.log("Evento de perda de foco")
        var newInstData = parseAssembly(e.target.value)

        var newInst = {
            address : instState.address,
            assembly : e.target.value.toUpperCase(),
            inst : newInstData
        }

        setInstValue(e.target.value.toUpperCase())
        setInstState(newInst)
        updateMem(newInst.address, newInst)
    }

    

    return (
        
        <div className = {pcIsHere ? styles.container_pc_highlight : (highlight ? styles.container_mem_highlight : styles.container)}>
            <div className = {`${styles.item} ${styles.pc_is_here}`}>
                {pcIsHere ? "PC" : ""}
            </div>
            <div className = {`${styles.item} ${styles.address}`}>
                {instState.address}
            </div>
            <div>
                { (instState.inst.is_valid | instState.assembly === "") ? 
                    <input 
                        type= "text"
                        value= {instValue}        
                        className = {styles.item}
                        onBlur = {handleAssemblyInput}
                        onFocus = {handleFocus}
                        onChange = {handleOnChange}
                    />
                :
                    <input 
                        type= "text"
                        value= {instValue}
                        className = {`${styles.item} ${styles.not_valid}`}
                        onBlur = {handleAssemblyInput}
                        onFocus = {handleFocus}
                        onChange = {handleOnChange}
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