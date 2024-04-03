#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance:number = 100000;
let pin:number = 3344;

let pinAnswer = await inquirer.prompt(
    {
       name: "pincode",
       type: "number",
       message: "Enter your pin."
    }
)

if(pinAnswer.pincode === pin )  {
    console.log("correct pin code")

    let operationAns = await inquirer.prompt(
        {
           name: "operation",
           message: "please choose one option",
           type: "list",
           choices: ["check balance" , "withdraw" , "fastCash"]
        }
    )

    if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`)
   
    } else if (operationAns.operation === "withdraw")   {
        let withdrawAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "How much amount would you like to withdraw ?"
        })

        //my balance -= withdrawAmount.amount
        if (withdrawAmount.amount < myBalance)   {
            myBalance -= withdrawAmount.amount,
            console.log(`Your remaining balance is: ${myBalance}`);

        }else if (withdrawAmount.amount > myBalance)   {
            console.log(`unable to process tranction! \n Your current balance is ${myBalance}`);
        }

    } else if (operationAns.operation === "fastCash")  {
        let cashAmount = await inquirer.prompt({
            name:"cash",
            type:"rawlist",
            message:"choose your amount",
            choices:["10000", "20000","50000", "10000"]
    })
     myBalance -= cashAmount.cash;
     console.log(`your remaining balance is: ${myBalance}`);
    }

}else if (pinAnswer.pincode !== pin)  {
    console.log("incorrecy pin number.");
}