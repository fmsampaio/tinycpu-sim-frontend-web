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
                <div>
                    <h2>{file.name}</h2>
                    <div key={index}>{file.content}</div>
                    <br />
                    <button onClick={handleOnClick}>Load memories</button>
                </div>
            ))}
            
        </>
    )
}

export default MemFilePicker