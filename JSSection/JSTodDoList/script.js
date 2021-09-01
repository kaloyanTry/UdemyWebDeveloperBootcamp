let input = prompt("What would you like to do?");
const todoList = ["Collect eggs"];

while (input !== "quit" && input !== 'q') {

    if (input === "list") {
        console.log("*****************");
        for (let i = 0; i < todoList.length; i++) {
            const task = todoList[i];
            console.log(`${i}: ${task}`);
        }
        console.log("*****************");
    } else if (input === "new") {
        const newTodo = prompt("Enter what is the new todo:");
        todoList.push(newTodo); 
        console.log(`${newTodo} added to the ToDo List`);
    } else if (input === "delete") {
        const indexTodo = parseInt(prompt("Enter what do you want ot delete:"));

        if (!Number.isNaN(indexTodo)) {
            const deletedTodo = todoList.splice(indexTodo, 1);
            console.log(`Ok! Deleted ${deletedTodo[0]}`);
        } else {
            console.log("Unknown index");
        }  
    } 
    
    input = prompt("What would you like to do?");
}

console.log("Quit the App.");