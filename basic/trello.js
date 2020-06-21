const myTodo=[];

myTodo.shift("Buy mamara");
myTodo.shift("Workout");
myTodo.shift("Learn coding");
myTodo.forEach((x,index)=>console.log(x+ " is no." + index));

myTodo.forEach(function(todo,index){
    console.log(`Your task number ${index+1} is ${todo}`)
})