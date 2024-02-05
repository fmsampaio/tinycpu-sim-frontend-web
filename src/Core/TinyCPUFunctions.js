const parseAssembly = function (assembly) {
    const fields = parseAssemblyFields(assembly)

    if(!fields.is_valid)
        return ""

    var binCodeStr = getOpCode(fields.inst)

    if(isRegInstruction(fields.inst)) {
        binCodeStr = binCodeStr.concat(getRegCode(fields.reg))
    }
    else if(isJcInstruction(fields.inst)) {
        binCodeStr = binCodeStr.concat(getCcCode(fields.cc))
    }
    else {
        binCodeStr = binCodeStr.concat("0")
    }
    
    if(!isHltInstruction(fields.inst)) {
        binCodeStr = binCodeStr.concat(getMemCode(fields.mem))
    }
    else {
        binCodeStr = binCodeStr.concat("0000")
    }

    const decInt = parseInt(binCodeStr, 2)

    return {
        fields : fields,
        bin : binCodeStr,
        dec : decInt,
        hex : decInt.toString(16).toUpperCase()
    }
}

export default parseAssembly

function parseAssemblyFields(assembly) {
    const assemblyStr = String(assembly)
    var tokens = assemblyStr.split(' ')

    var inst = tokens[0]
    var reg = ""
    var cc = ""
    var mem = ""

    var isValid = true

    if(isRegInstruction(inst)) {
        reg = tokens[1]
        mem = tokens[2]  
    }
    else if(isJcInstruction(inst)) {
        cc = tokens[1]
        mem = tokens[2]
    }
    else if(isJmpInstruction(inst)) {
        mem = tokens[1]
    } 
    else if(! isHltInstruction(inst)) {
        isValid = false
    }

    return {
        "is_valid" : isValid,
        "inst" : inst,
        "reg" : reg,
        "cc" : cc,
        "mem" : mem
    }
}

function isRegInstruction(inst) {
    var regInstructions = ["LDR", "STR", "ADD", "SUB"]
    return regInstructions.includes(inst)
}

function isJcInstruction(inst) {
    return inst === "JC"
}

function isJmpInstruction(inst) {
    return inst === "JMP"
}

function isHltInstruction(inst) {
    return inst === "HLT"
}

function getOpCode(inst) {
    if(inst === "LDR")
        return "001"
    else if(inst === "STR")
        return "010"
    else if(inst === "ADD")
        return "011"
    else if(inst === "SUB")
        return "100"
    else if(inst === "JMP")
        return "101"
    else if(inst === "JC")
        return "110"
    else if(inst === "HLT")
        return "111"
    else
        return ""    
}

function getRegCode(reg) {
    return (reg === "RA") ? "0" : "1"
}

function getCcCode(cc) {
    return (cc === "Z") ? "0" : "1"
}

function getMemCode(mem) {
    let memInt = parseInt(mem)
    return dec2bin(memInt)
}

function dec2bin(dec) {
    var binStr = (dec >>> 0).toString(2)
    while(binStr.length < 4) {
        binStr = "0".concat(binStr)
    }
    return binStr.substring(binStr.length - 4)
}