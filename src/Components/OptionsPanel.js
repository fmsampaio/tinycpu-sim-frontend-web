import styles from "./OptionsPanel.module.css"

function OptionsPanel( {handleClearMemories, handleSaveMemories} ) {
       
    return (
        <div className = {styles.container}>
            <h1>Options</h1>
            <div className = {styles.btns_container} >
                <button onClick={handleClearMemories}>
                    Clear Memories
                </button>
                <button onClick={handleSaveMemories}>
                    Save Memories
                </button>

            </div>
        </div>
    )
}

export default OptionsPanel