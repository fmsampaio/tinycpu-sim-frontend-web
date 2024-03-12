import styles from "./OptionsPanel.module.css"
import MemFilePicker from "./MemFilePicker";

function OptionsPanel( {handleClearMemories, handleSaveMemories, handleLoadMemories} ) {

    return (
        <div className = {styles.container}>
            <h2>Options</h2>
            <div className = {styles.btns_container} >
                <button onClick={handleClearMemories}>
                    Clear Memories
                </button>
                <button onClick={handleSaveMemories}>
                    Save Memories
                </button>
                <MemFilePicker handleLoadMemories={handleLoadMemories}/>
                
            </div>
        </div>
    )
}

export default OptionsPanel

/*{filesContent.map((file, index) => (
<div>
    <h2>{file.name}</h2>
    <div key={index}>{file.content}</div>
    <br />
</div>
))}*/