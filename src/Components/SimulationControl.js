import Alert from "./Alert"
import styles from "./SimulationControl.module.css"

function SimulationControl( {handleStepBtn, handleResetBtn, handleRunBtn, hltReached, timeout} ) {
    

    return (
        <div className = {styles.container}>
            <h1>Simulation</h1>
            <div className = {styles.btns_container}>
                <button 
                    onClick={handleStepBtn}
                >
                    Step
                </button>
                <button
                    onClick={handleRunBtn}
                >
                    Run
                </button>
                <button
                    onClick={handleResetBtn}
                >
                    Reset
                </button>
            </div>
            <Alert message="Timeout!" type="error" show={timeout}/>     
            <Alert message="HLT reached!" type="success" show={hltReached}/>     
        </div>
    )
}

export default SimulationControl