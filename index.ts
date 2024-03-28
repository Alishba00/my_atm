import inquirer from "inquirer";
import chalk from "chalk";

let myBalance:number = 10000; //Dollars
let myPin:number = 1068;

let pinAnswer = await inquirer.prompt(
 [
    {
    name: "pin",
    type: "number",
    message: "Enter your pin number?",
   }
 ]
);
if(pinAnswer.pin == myPin){
    console.log(chalk.underline.bold.blue("Your pin code is correct!"));
    
    let operationAns = await inquirer.prompt(
       [
        {
            name:"operation",
            type:"list",
            message:"Select one of them?",
            choices:["withdraw","check balance","fast check", "deposit","Exit"],
        }
       ]
    );
    //withdraw code
    if(operationAns.operation == "withdraw"){
       let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                type:"number",
                message:"Enter your amount",
            }
        ]
       );
       if(amountAns.amount > myBalance){
        console.log(chalk.underline.bold.red("INSUFFICIENT BALANCE!"));
       }
         else if (myBalance -= amountAns.amount){
            console.log(chalk.bold.underline.redBright("Your remaining balance is: " + myBalance));
         }

        
      }
      //check balance code 
     if  (operationAns.operation == "check balance"){
            console.log(chalk.underline.green("Your balance is " + myBalance ));
        }
        //fastcheck code
        else if (operationAns.operation == "fast check"){
            let fastcheckAns = await inquirer.prompt(
                [
                    {
                        name: "fastcheck",
                        type : "list",
                        message : "Select one of them?",
                        choices : ["1000","2000","3000","4000","5000","6000","7000","8000"],
                    }
                ]
            );
            myBalance -= fastcheckAns.fastcheck;
            console.log(chalk.redBright.bold.underline("Your remaining balance is:" + myBalance));
        }
          //deposit code
       else if(operationAns.operation == "deposit"){
        let depositAns = await inquirer.prompt(
            [
                {
                    name : "deposit",
                    type : "number",
                    message : "Enter your deposit amount",

                }
            ]
        );
          myBalance += depositAns.deposit;

          console.log(chalk.underline.green("Your balance is " + myBalance));
       } 
       //for exit.
       else if (operationAns.operation == "Exit"){
        console.log(chalk.italic.underline.magentaBright("Thank you :) HAVE A NICE DAY!"));
       }

}

else{
    console.log(chalk.underline.cyan("Please Enter a valid Pin Code!"));
}