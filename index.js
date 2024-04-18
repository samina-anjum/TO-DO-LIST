//#!/usr/bin/env node//
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    //...............................options...................//
    let options = await inquirer.prompt([{
            type: "list",
            name: "user_options",
            message: "select an option",
            choices: [
                "add",
                "remove",
            ]
        }]);
    //...............................add........................//
    if (options.user_options === "add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "write some things to the task list",
            }]);
        if (ans.user_ans === "") {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else {
            console.log("please write  something to add the todo list");
        }
    }
    //...............................remove........................//
    if (options.user_options === "remove") {
        let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "remove item",
                message: "selct item to remove",
                choices: todo_list,
            }]);
        let index_to_remove = todo_list.indexOf(removeChoice);
        if (index_to_remove >= 0) {
            todo_list.splice(index_to_remove, 1);
            console.log('you removed:', removeChoice.remove_item);
            console.log(todo_list);
        }
    }
}
