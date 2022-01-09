class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    

    class(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete (){
        
    }
    
    appendNumber(number){
        if(number ==='' && this.currentOperand.includes('.'))return
    }
    
    currentOperation(operation){
    
    }
    
    getComputedStyle(){
    
    }
    
    updateDisplay(){
        
    }


}



const numberButtons = document.querySelectorAll( '[data-number ]')
const operationButtons = document.querySelectorAll( '[data-operation]')
const equalsButton = document.querySelector( '[data-equals]')
const deleteButton = document.querySelector( '[data-delete]')
const alllClearButton = document.querySelector( '[data-all-clear]')
const previousOperandTextElement = document.querySelector( '[data-previous-operand]')
const currentOperandTextElement = document.querySelector( '[data-current-operand]')


const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)




  