import styles from "./DataEdit.module.css"
import {useState} from "react"

function DataEdit( {data, updateMem} ) {
    const [dataState, setDataState] = useState(data)

    const handleFocus = (event) => event.target.select();

    function handleDataInput(e) {
        console.log("[Data] Evento de perda de foco")
        var newDataState = {}
        if(!isNaN(parseInt(e.target.value))) {
            newDataState = {
                "address" : dataState.address,
                "data" : parseInt(e.target.value)
            }    
        }
        else {
            newDataState = {
                "address" : dataState.address,
                "data" : 0
            }
            e.target.value = 0
        }
        setDataState(newDataState)
        updateMem(newDataState.address, newDataState)
    }

    return (
        <div className = {styles.container}>
            <div className = {`${styles.item} ${styles.address}`}>
                {dataState.address}
            </div>
            <div>
                <input
                    type = "text"
                    defaultValue = {dataState.data}
                    className = {styles.item}
                    onBlur = {handleDataInput}
                    onFocus = {handleFocus}
                />
            </div>
        </div>
    )
}

export default DataEdit