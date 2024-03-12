import { useFilePicker } from "use-file-picker";
import styles from "./MemFilePicker.module.css"
import { useState } from "react";

function MemFilePicker( {handleLoadMemories} ) {

    const [showFileContent, setShowFileContent] = useState(false)

    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: '.mem',
      });

    const handleSelectFileOnClick = (e) => {
        openFilePicker()
        setShowFileContent(true)
    }
    
    if(loading) {
        return (<div>Loading...</div>)
    }

    const handleOnClick = (e) => {
        setShowFileContent(false)
        handleLoadMemories(filesContent[0].content)
    }

    return (
        <>
            <button onClick={() => handleSelectFileOnClick()}>Select file</button>
            <br />
            {showFileContent && filesContent.map((file, index) => (
                <div className={styles.file_info_container}>
                    <p className={styles.file_p}><b>Arquivo selecionado:</b><br />{file.name}</p>
                    
                    <button onClick={handleOnClick}>Load memories</button>
                </div>
            ))}
            
        </>
    )
}

export default MemFilePicker