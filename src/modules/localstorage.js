function setUserTasks(value) {
    localStorage.setItem('user', JSON.stringify([...getUserTasks(), {
        value: value,
        status: 'PROCESSING'
    }]))
}

function getUserTasks() {
    let data = JSON.parse(localStorage.getItem('user'))
    return data ? data : []
}

function removeUserTasks() {
    localStorage.removeItem('user');
}

function additionRenderBodyTask(todoBody, clearTasks, savedTasks, changePlaceTask) {
    todoBody.innerHTML = '';
    console.log(savedTasks)
    savedTasks.forEach(({
        value,
        status
    }, index) => {
        let task = document.createElement('div')
        task.classList.add('body__task')

        task.innerHTML = `
        <p class = 'task__descr'>${value}</p>
        <div  class = 'cointainer__task'>
        <button class = 'task__delete'> Delete</button>
        <button class = 'task__completed'>Completed</button>
        </div>
    `

        todoBody.append(task)
        taskDelet = task.querySelector('.task__delete')
        taskDelet.addEventListener('click', () => {
            task.remove()
            removeTask()
        })

        changeTaskBtn = task.querySelector('.task__completed')
        changeTaskBtn.addEventListener('click', () => {
            console.log(savedTasks[index])
        });

        function removeTask() {
            savedTasks.splice(index, 1)
            localStorage.setItem('user', JSON.stringify(savedTasks))
        }


    })
}