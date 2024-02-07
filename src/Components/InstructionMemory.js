import styles from "./InstructionMemory.module.css"
import InstructionEdit from "./InstructionEdit"

function InstructionMemory( {memoryData, updateMem, pc} ) {

    return (
        <div className = {styles.container}>
            <h1>Instructions Memory</h1>
            <div>
                { 
                memoryData.map( (inst) => (
                    <InstructionEdit instruction={inst} updateMem={updateMem} pcIsHere={pc === inst.address} />
                ))
                }
            </div>
        </div>
    )
}

export default InstructionMemory