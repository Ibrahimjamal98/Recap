let myTasks = [];

function addTask(desc) {
    myTasks.push({
        description: desc,
        completed: false,
    })
}

function printAllTasks() {
    myTasks.map((value, index) => {
        console.log(index, value);
    })
}

function deleteTask(index) {
    myTasks = myTasks.filter((_, i) => {
        return i !== index;
    })
}

function completedTask(index) {
    myTasks.map((v, i) => {
        if (index === i) {
            v.completed = true;
        }
    })
}

function searchTask(search) {
    console.log(myTasks.find((v, i) => {
        return v.description.includes(search)
    }));

}

addTask("buy milk");
addTask("clean your room");
addTask("go to school");
completedTask(1)
printAllTasks();
searchTask("clean");
deleteTask(1)