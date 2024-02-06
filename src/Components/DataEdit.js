import styles from "./DataEdit.module.css"
import {useState, useEffect} from "react"

function DataEdit( {data, updateMem} ) {
    const [dataState, setDataState] = useState(data)
    const [dataValue, setDataValue] = useState(data.data.toString())

    useEffect( () => {
        setDataValue(data.data.toString())
    }, [data])

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

    function handleOnChange(e) {
        setDataValue(e.target.value)
    }
    

    return (
        <div className = {styles.container}>
            <div className = {`${styles.item} ${styles.address}`}>
                {dataState.address}
            </div>
            <div>
                <input
                    type = "text"
                    value = {dataValue}
                    className = {styles.item}
                    onBlur = {handleDataInput}
                    onFocus = {handleFocus}
                    onChange = {handleOnChange}
                />
            </div>
        </div>
    )
}

export default DataEdit