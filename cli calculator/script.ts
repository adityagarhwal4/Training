import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void{
    const firstStr: string = question(`Enter the first number:\n`);
    const operator: string = question(`Enter operator:\n`);
    const secondStr: string = question(`Enter the second number:\n`);

    const isValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    
    if(isValid){
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);
    }
    else{
        console.log("\ninput not valid\n");
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number){
    switch(operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

function isOperator(opr: string): boolean{
    switch(opr){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean{
    const mayBeNum = parseInt(str);
    const isNum: boolean = !isNaN(mayBeNum);
    return isNum;
}
main();