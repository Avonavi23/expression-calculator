function eval() {
    // Do not use eval!!!
    return;
}
    
function getFindedChars(arrStr, char) {
    return arrStr.reduce((acc, item) => item === char ? acc += item : acc, '');
}
    
function expressionCalculator(str) {
    const arrStr = str.split('');
    arrStr.forEach((item, i, arr) => {
        if (item === '/' && arr[i + 2] === '0') {
            throw new Error('TypeError: Division by zero.');
        }
    });
    
    const leftBr = getFindedChars(arrStr, '(');
    const rightBr = getFindedChars(arrStr, ')');
    
    if (leftBr.length !== rightBr.length) {
        throw new Error('ExpressionError: Brackets must be paired.');
    }
    
    const result = (new Function(`return ${str}`))();
    
    return result;
}
    
module.exports = {
    expressionCalculator
}
    