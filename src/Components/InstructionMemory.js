import styles from "./InstructionMemory.module.css"
import InstructionEdit from "./InstructionEdit"

function InstructionMemory( {memoryData, updateMem, pc, highlight} ) {

    return (
        <div className = {styles.container}>
            <h2>Instructions<br/>Memory</h2>
            <div>
                { 
                memoryData.map( (inst) => (
                    <InstructionEdit instruction={inst} updateMem={updateMem} pcIsHere={pc === inst.address} highlight={highlight.highlight && (highlight.address === inst.address)} />
                ))
                }
            </div>
        </div>
    )
}

export default InstructionMemory