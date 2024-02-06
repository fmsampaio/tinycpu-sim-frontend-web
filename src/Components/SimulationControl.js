import styles from "./SimulationControl.module.css"

function SimulationControl( {handleStepBtn} ) {
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
            

        </div>
    )
}

export default SimulationControl