import styles from "./OptionsPanel.module.css"

function OptionsPanel( {handleClearMemories, handleSaveMemories} ) {
    
    const handleFileChange = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            const text = (e.target.result)
            console.log(text)
        };
        reader.readAsText(e.target.files[0])
    }

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
                <input type="file" onChange={handleFileChange}/>
            </div>
        </div>
    )
}

export default OptionsPanel