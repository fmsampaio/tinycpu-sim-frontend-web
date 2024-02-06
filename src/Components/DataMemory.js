import styles from "./DataMemory.module.css"
import DataEdit from "./DataEdit"

function DataMemory( {memoryData, updateMem} ) {

    return (
        <div className = {styles.container}>
            <h1>Data Memory</h1>
            <div>
                { 
                memoryData.map( (data) => (
                    <DataEdit data={data} updateMem={updateMem}/>
                ))
                }
            </div>
        </div>
    )
}

export default DataMemory