const taskAddition = () => {
    const todoBody = document.querySelector('.todo__body'),
        todoTask = document.querySelector('.body__task'),
        headerInput = document.querySelector('.header__input'),
        headerBtn = document.querySelector('.header__btn'),
        clearTasks = document.getElementById('clear')

    let getValue


    headerBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getValue = headerInput.value;
        getValue.trim()
        if (!getValue.length || getValue.trim() === '') {
            return
        } else {
            additionTask();
            headerInput.value = '';
        }
    })

    const additionTask = () => {
        let task = document.createElement('div')
        task.classList.add('body__task')

        task.innerHTML = `
        <p class = 'task__descr'>${getValue}</p>
        <button class = 'task__delete'> Delete</button>
    `
        todoBody.append(task)

        clearTasks.addEventListener('click', () => {
            task.remove()
        })
    }


}
taskAddition()