function setUserTasks(value) {
    localStorage.setItem('user', JSON.stringify([...getUserTasks(), value]))
}

function getUserTasks() {
    let data = JSON.parse(localStorage.getItem('user'))
    return data ? data : []
}

function additionRenderBodyTask(todoBody, clearTasks, secondData) {
    todoBody.innerHTML = '';
    console.log(secondData)
    secondData.forEach(element => {
        let task = document.createElement('div')
        task.classList.add('body__task')

        task.innerHTML = `
        <p class = 'task__descr'>${element}</p>
        <button class = 'task__delete'> Delete</button>
    `
        todoBody.append(task)
        clearTasks.addEventListener('click', () => {
            task.remove()
            localStorage.removeItem('user');
        })
        taskDelet = task.querySelector('.task__delete')
        taskDelet.addEventListener('click', () => {
            task.remove()
            secondData.splice(secondData.indexOf(element), 1)
            localStorage.setItem('user', JSON.stringify(secondData))
            console.log(secondData)
        })
    });


}