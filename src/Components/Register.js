import styles from "./Register.module.css"


function Register ( {name, data, type} ) {

    function parseDataToHex(data) {
        var hexData = parseInt(data).toString(16).toUpperCase()
        if(hexData.length === 1) {
            hexData = "0" + hexData
        }
        return hexData
    }

    return (
        <div className = {styles.container}>
            <h2>{name}</h2>
            { type === "8-bit-hex" && 
                <p>{parseDataToHex(data)}</p>
            }
            { type === "8-bit-dec" && 
                <p>{data}</p>
            }
            { type === "4-bit-dec" &&
                <p>{data}</p>
            }
            { (type === "1-bit" && data === "false")  &&
                <>
                    <div className = {`${styles.led} ${styles.red}`}> </div>
                </>
            }
            { (type === "1-bit" && data === "true")  &&
                <>
                    <div className = {`${styles.led} ${styles.green}`}> </div>
                </>
            }
        </div>
    )

}

export default Register