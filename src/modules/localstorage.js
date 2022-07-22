function setUserTasks(value) {
    localStorage.setItem('user', JSON.stringify([...getUserTasks(), value]))
}

function getUserTasks() {
    let data = JSON.parse(localStorage.getItem('user'))
    return data ? data : []
}

function additionRenderBodyTask(todoBody, clearTasks, secondData) {
    todoBody.innerHTML = ''
    console.log(secondData)
    secondData.forEach(element => {
        console.log(element)
        let task = document.createElement('div')
        task.classList.add('body__task')
        task.innerHTML = `
        <p class = 'task__descr'>${element}</p>
        <button class = 'task__delete'> Delete</button>
    `
        todoBody.prepend(task)
        clearTasks.addEventListener('click', () => {
            task.remove()
        })
        taskDelet = task.querySelector('.task__delete')
        taskDelet.addEventListener('click', () => {
            task.remove()
        })
    });
}