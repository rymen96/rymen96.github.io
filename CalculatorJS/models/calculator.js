function Calculator(leftOperand, opeator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = opeator;
    this.rightOperand = rightOperand;
    
    this.calculateResult = function () {
        let result = 0;

        switch (this.operator){
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                break;
            case "/":
                result = this.leftOperand / this.rightOperand;
                break;

        }
        return result;
    }
}

module.exports = Calculator;