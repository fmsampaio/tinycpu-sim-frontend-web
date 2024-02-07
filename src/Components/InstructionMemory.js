import styles from "./InstructionMemory.module.css"
import InstructionEdit from "./InstructionEdit"

function InstructionMemory( {memoryData, updateMem, pc, highlight} ) {

    return (
        <div className = {styles.container}>
            <h1>Instructions Memory</h1>
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