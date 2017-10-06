
var readline = require('readline')



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.on("line", function (input ){
    toDoInfo = input.split(" ")

    function whereToPass (input){
        if (toDoInfo[0].toLowerCase() === "add"){
            toDoInfo.splice(0,1)
        } else if (toDoInfo[0].toLowerCase() === "toggle"){
            toDoInfo[1].completed = 
        }
    }

    function createTodo(description,){
    var todo = {
        description: description,
        completed: 'false' 
    }
      
    return todo
    }
    function logTodo(todo, i){
        console.log(i + '. ' + todo.description + '. Completed: ' + todo.completed)
    }
      
    function forEachArr(arr, callback){
        for (var i = 0; i < arr.length; i++){
            callback(arr[i], i)
    }
      }
      
      
      
    
    todoArr.push (buyMilk)
      
    var cleanHouse = createTodo('clean the house', false)
    todoArr.push(cleanhouse)
      
    forEachArr(todoArr, logTodo)
})