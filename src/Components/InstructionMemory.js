import styles from "./InstructionMemory.module.css"
import { useState, useEffect } from "react"
import InstructionEdit from "./InstructionEdit"

function InstructionMemory( {memoryData, updateMem} ) {

    return (
        <div className = {styles.container}>
            <h1>Instructions Memory</h1>
            <div>
                { 
                memoryData.map( (inst) => (
                    <InstructionEdit instruction={inst} updateMem = {updateMem} />
                ))
                }
            </div>
        </div>
    )
}

export default InstructionMemory