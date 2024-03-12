import styles from "./DataMemory.module.css"
import DataEdit from "./DataEdit"

function DataMemory( {memoryData, updateMem, highlight} ) {

    return (
        <div className = {styles.container}>
            <h2>Data Memory</h2>
            <div>
                { 
                memoryData.map( (data) => (
                    <DataEdit data={data} updateMem={updateMem} highlight={highlight.highlight && (highlight.address === data.address)}/>
                ))
                }
            </div>
        </div>
    )
}

export default DataMemory