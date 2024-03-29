let input = [3,225,1,225,6,6,1100,1,238,225,104,0,1101,81,30,225,1102,9,63,225,1001,92,45,224,101,-83,224,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1102,41,38,225,1002,165,73,224,101,-2920,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,18,14,224,1001,224,-32,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,1101,67,38,225,1102,54,62,224,1001,224,-3348,224,4,224,1002,223,8,223,1001,224,1,224,1,224,223,223,1,161,169,224,101,-62,224,224,4,224,1002,223,8,223,101,1,224,224,1,223,224,223,2,14,18,224,1001,224,-1890,224,4,224,1002,223,8,223,101,3,224,224,1,223,224,223,1101,20,25,225,1102,40,11,225,1102,42,58,225,101,76,217,224,101,-153,224,224,4,224,102,8,223,223,1001,224,5,224,1,224,223,223,102,11,43,224,1001,224,-451,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1102,77,23,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,8,226,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,7,226,226,224,102,2,223,223,1006,224,344,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,359,101,1,223,223,1107,226,677,224,1002,223,2,223,1005,224,374,101,1,223,223,1008,677,226,224,1002,223,2,223,1005,224,389,101,1,223,223,1007,677,226,224,1002,223,2,223,1005,224,404,1001,223,1,223,1107,677,226,224,1002,223,2,223,1005,224,419,1001,223,1,223,108,677,226,224,102,2,223,223,1006,224,434,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,449,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,464,101,1,223,223,107,677,226,224,102,2,223,223,1006,224,479,101,1,223,223,1007,677,677,224,1002,223,2,223,1006,224,494,1001,223,1,223,1008,226,226,224,1002,223,2,223,1006,224,509,101,1,223,223,7,677,226,224,1002,223,2,223,1006,224,524,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,539,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,554,101,1,223,223,1008,677,677,224,102,2,223,223,1006,224,569,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,584,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,599,1001,223,1,223,1108,677,677,224,1002,223,2,223,1006,224,614,1001,223,1,223,1107,677,677,224,1002,223,2,223,1005,224,629,1001,223,1,223,108,226,226,224,1002,223,2,223,1005,224,644,101,1,223,223,8,226,226,224,1002,223,2,223,1005,224,659,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,674,101,1,223,223,4,223,99,226]
let exampleInput = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
    1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
    999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
let userInput = 5;

const operations = {
    1: function (intCode, start, modes) {
        intCode[intCode[start+3]] = getParameter(intCode, start+1, modes[0]) + getParameter(intCode, start+2, modes[1])
        
        return start+4;
    },
    2: function (intCode, start, modes) {
        intCode[intCode[start+3]] = getParameter(intCode, start+1, modes[0]) * getParameter(intCode, start+2, modes[1])
        return start+4;
    },
    3: function (intCode, start, modes) {
        intCode[intCode[start+1]] = userInput;
        return start+2;
    },
    4: function (intCode, start, modes) {
        console.log(getParameter(intCode, start+1, modes[0]));

        return start+2;
    },
    5: function (intCode, start, modes) {
        if (0 === getParameter(intCode, start+1, modes[0])) {
            return start+3;
        }

        return getParameter(intCode, start+2, modes[1]);
    },
    6: function (intCode, start, modes) {
        if (0 === getParameter(intCode, start+1, modes[0])) {
            return getParameter(intCode, start+2, modes[1]);
        }

        return start+3;
    },
    7: function (intCode, start, modes) {
        const one = getParameter(intCode, start+1, modes[0]);
        const two = getParameter(intCode, start+2, modes[1]);

        intCode[intCode[start+3]] = (one < two) ? 1 : 0;

        return start+4
    },
    8: function (intCode, start, modes) {
        const one = getParameter(intCode, start+1, modes[0]);
        const two = getParameter(intCode, start+2, modes[1]);

        intCode[intCode[start+3]] = (one === two) ? 1 : 0;

        return start+4
    },
    9: function (intCode, start, modes) {
        console.log('All done!');

        return -1;
    }
}

const getParameter = function(intCode, index, mode) {
    //           mode = immediate      : position
    return 1 === mode ? intCode[index] : intCode[intCode[index]];
}

const operate = function (intCode, start) {
    const [opcode, , ...modes] = intCode[start].toString().padStart(5, '0').split('').map(Number).reverse();
    const next = operations[opcode](intCode, start, modes);
    return (-1 === next) ? intCode : operate(intCode, next);
}

operate(input, 0);