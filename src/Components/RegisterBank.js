import styles from "./RegisterBank.module.css"
import Register from './Register';

function RegisterBank( {regs} ) {
    return (
        <div className = {styles.regs_container}>
        <h1>Registers</h1>
        <div className = {styles.internal_regs_container}>
          <Register name="PC" data={regs.PC} type="4-bit-dec"/>
          <Register name="RI" data={regs.RI} type="8-bit-hex"/>
          <Register name="RA" data={regs.RA} type="8-bit-dec"/>
          <Register name="RB" data={regs.RB} type="8-bit-dec"/>
          <Register name="RZ" data={regs.RZ} type="1-bit"/>
          <Register name="RN" data={regs.RN} type="1-bit"/>
        </div>        
      </div>
    )
}

export default RegisterBank