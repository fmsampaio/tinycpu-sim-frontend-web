import Alert from "./Alert"
import styles from "./SimulationControl.module.css"

function SimulationControl( {handleStepBtn, hltReached} ) {
    

    return (
        <div className = {styles.container}>
            <h1>Simulation</h1>
            <div className = {styles.btns_container}>
                <button 
                    onClick={handleStepBtn}
                >
                        Step
                </button>
                <button>Run</button>
                <button>Reset</button>
            </div>
            <Alert message="HLT reached! End of program..." type="success" show={hltReached}/>     
        </div>
    )
}

export default SimulationControl