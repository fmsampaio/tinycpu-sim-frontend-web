const parseAssembly = function (assembly) {
    const parsing = parseAssemblyFields(assembly)
    const fieldsParsed = parsing.fields

    if(!parsing.is_valid)
        return {
            "is_valid" : false,
            "fields" : {},
            "bin" : "",
            "dec" : -1,
            "hex" : ""
        }

    console.log(fieldsParsed)

    var binCodeStr = getOpCode(fieldsParsed.inst)

    if(isRegInstruction(fieldsParsed.inst)) {
        binCodeStr = binCodeStr.concat(getRegCode(fieldsParsed.reg))
    }
    else if(isJcInstruction(fieldsParsed.inst)) {
        binCodeStr = binCodeStr.concat(getCcCode(fieldsParsed.cc))
    }
    else {
        binCodeStr = binCodeStr.concat("0")
    }
    
    if(!isHltInstruction(fieldsParsed.inst)) {
        binCodeStr = binCodeStr.concat(getMemCode(fieldsParsed.mem))
    }
    else {
        binCodeStr = binCodeStr.concat("0000")
    }

    const decInt = parseInt(binCodeStr, 2)

    return {
        "is_valid" : true,
        "fields" : fieldsParsed,
        "bin" : binCodeStr,
        "dec" : decInt,
        "hex" : decInt.toString(16).toUpperCase()
    }
}

export default parseAssembly

function parseAssemblyFields(assembly) {
    const assemblyStr = String(assembly).trim().toUpperCase()
    
    var isValid = true
    var fields = {}

    if(validateRegInstruction(assembly) || 
        validateJmpInstruction(assembly) || 
        validateJcInstruction(assembly) ||
        validateHltInstruction(assembly) 
    ) {

        var tokens = assemblyStr.split(' ')
        
        var inst = tokens[0]
        
        if(isRegInstruction(inst)) {
            fields = {
                "inst" : inst,
                "reg" : tokens[1],
                "mem" : tokens[2]
            }
        }
        else if(isJcInstruction(inst)) {
            fields = {
                "inst" : inst,
                "cc" : tokens[1],
                "mem" : tokens[2]
            }
        }
        else if(isJmpInstruction(inst)) {
            fields = {
                "inst" : inst,
                "mem" : tokens[1]
            }
        }
        else {
            fields = {
                "inst" : inst
            }
        }

    }
    else {
        isValid = false
    }

    return {
        "is_valid" : isValid,
        "fields" : fields
    }
}

function validateRegInstruction(assembly) {
    const regInstructionMatch = /^(\s*)(LDR|STR|ADD|SUB|ldr|str|add|sub)(\s+)(RA|RB|ra|rb)(\s+)(\d+)(\s*)$/
    return regInstructionMatch.test(assembly)
}

function validateJcInstruction(assembly) {
    const jcInstructionMatch = /^(\s*)(JC|jc)(\s+)(N|Z|n|z)(\s+)(\d+)(\s*)$/
    return jcInstructionMatch.test(assembly)
}

function validateJmpInstruction(assembly) {
    const jmpInstructionMatch = /^(\s*)(JMP|jmp)(\s+)(\d+)(\s*)$/
    return jmpInstructionMatch.test(assembly)
}

function validateHltInstruction(assembly) {
    const hltInstructionMatch = /^(\s*)(HLT|hlt)(\s*)$/
    return hltInstructionMatch.test(assembly)
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
    return (reg === "RA") ? "0" : (reg === "RB") ? "1" : "err"
}

function getCcCode(cc) {
    return (cc === "Z") ? "0" : (cc === "N") ? "1" : "err"
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
